"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./feud.module.css";

type Question = { question: string; answers: string[] };

export default function FeudGame({ questions }: { questions: Question[] }) {
  const [current, setCurrent] = useState(0);
  const [revealed, setRevealed] = useState<number[]>([]);
  const [soundOn, setSoundOn] = useState(true);
  const [flash, setFlash] = useState(0);
  const ding = useRef<HTMLAudioElement>(null);
  const clap = useRef<HTMLAudioElement>(null);
  const audioContext = useRef<AudioContext | null>(null);
  const applauseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const soundEnabled = useRef(true);
  const soundVersion = useRef(0);
  const item = questions[current];

  const stopSound = useCallback(() => {
    soundVersion.current += 1;
    if (applauseTimer.current) clearTimeout(applauseTimer.current);
    ding.current?.pause();
    clap.current?.pause();
    if (audioContext.current) {
      void audioContext.current.close().catch(() => {});
      audioContext.current = null;
    }
  }, []);

  useEffect(() => stopSound, [stopSound]);

  const playSound = useCallback(() => {
    stopSound();
    const version = soundVersion.current;
    const fallback = () => {
      if (!soundEnabled.current || version !== soundVersion.current || !window.AudioContext) return;
      const ctx = new AudioContext();
      audioContext.current = ctx;
      void ctx.resume().catch(() => {});
      const now = ctx.currentTime;
      [659.25, 783.99, 1046.5].forEach((frequency, index) => {
        const start = now + index * 0.09;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.value = frequency;
        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.exponentialRampToValueAtTime(0.18, start + 0.012);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.34);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(start);
        osc.stop(start + 0.4);
        if (index === 2) osc.onended = () => {
          if (audioContext.current === ctx) {
            audioContext.current = null;
            void ctx.close().catch(() => {});
          }
        };
      });
    };
    if (ding.current) {
      ding.current.currentTime = 0;
      ding.current.volume = 0.95;
      void ding.current.play().catch(fallback);
    }
    applauseTimer.current = setTimeout(() => {
      if (!soundEnabled.current || !clap.current) return;
      clap.current.currentTime = 0;
      clap.current.volume = 0.58;
      void clap.current.play().catch(() => {});
    }, 520);
  }, [stopSound]);

  const reveal = useCallback((index: number) => {
    if (index < 0 || index >= item.answers.length || revealed.includes(index)) return;
    setRevealed(previous => [...previous, index]);
    setFlash(previous => previous + 1);
    if (soundOn) playSound();
  }, [item.answers.length, revealed, soundOn, playSound]);

  const reset = useCallback(() => {
    setRevealed([]);
    stopSound();
  }, [stopSound]);

  const navigate = useCallback((direction: number) => {
    setCurrent(previous => (previous + direction + questions.length) % questions.length);
    reset();
  }, [questions.length, reset]);

  const toggleFullscreen = useCallback(async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen?.();
      else await document.documentElement.requestFullscreen?.();
    } catch {
      // The game remains playable when fullscreen is unavailable.
    }
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.repeat || event.altKey || event.ctrlKey || event.metaKey) return;
      const target = event.target;
      if (target instanceof HTMLElement && (target.isContentEditable || target.closest("input, textarea, select"))) return;
      const key = event.key.toLowerCase();
      if (/^[1-9]$/.test(key)) reveal(Number(key) - 1);
      else if (key === "r") reset();
      else if (key === "arrowright") navigate(1);
      else if (key === "arrowleft") navigate(-1);
      else if (key === "f") void toggleFullscreen();
      else return;
      event.preventDefault();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [reveal, reset, navigate, toggleFullscreen]);

  return (
    <main className={styles.game}>
      <div className={styles.app}>
        <header className={styles.topbar}>
          <h1 className={styles.brand}>BCDS • DENTAL FEUD</h1>
          <p className={styles.round}>TOP {item.answers.length} ANSWERS • 1 POINT PER MATCH</p>
        </header>
        <section className={styles.question} aria-live="polite">
          <p className={styles["question-label"]}>Survey Says</p>
          <h2 className={styles["question-text"]}>{item.question}</h2>
        </section>
        <section className={styles["board-wrap"]} aria-label="Answer board">
          <div className={`${styles["bulb-row"]} ${styles.top}`} aria-hidden="true" />
          <div className={`${styles["bulb-row"]} ${styles.bottom}`} aria-hidden="true" />
          <div className={`${styles["bulb-side"]} ${styles.left}`} aria-hidden="true" />
          <div className={`${styles["bulb-side"]} ${styles.right}`} aria-hidden="true" />
          <div className={styles.board} key={current}>
            {item.answers.map((answer, index) => {
              const visible = revealed.includes(index);
              return (
                <button type="button" key={index}
                  className={`${styles.answer} ${visible ? styles.revealed : ""}`}
                  aria-label={visible ? `Answer ${index + 1}: ${answer}` : `Reveal answer ${index + 1}`}
                  aria-pressed={visible} onClick={() => reveal(index)}>
                  <span className={`${styles.face} ${styles.front}`} aria-hidden="true">
                    <span className={styles.num}>{index + 1}</span>
                    <span className={styles.mystery}>••••••••••</span>
                  </span>
                  <span className={`${styles.face} ${styles.back}`} aria-hidden="true">
                    <span className={styles.num}>{index + 1}</span>
                    <span className={styles["answer-text"]}>{answer}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </section>
        <section className={styles.controls} aria-label="Game controls">
          <div className={styles.btns}>
            <button className={styles.control} onClick={() => navigate(-1)}>← Previous</button>
            <button className={styles.control} onClick={reset}>Reset Board</button>
          </div>
          <p className={styles.counter} aria-live="polite">Question {current + 1} of {questions.length}</p>
          <div className={`${styles.btns} ${styles.right}`}>
            <button className={styles.control} onClick={() => void toggleFullscreen()}>Fullscreen</button>
            <button className={styles.control} aria-pressed={soundOn} onClick={() => {
              soundEnabled.current = !soundOn;
              setSoundOn(!soundOn);
              if (soundOn) stopSound();
            }}>Sound: {soundOn ? "On" : "Off"}</button>
            <button className={`${styles.control} ${styles.primary}`} onClick={() => navigate(1)}>Next Question →</button>
          </div>
        </section>
        <p className={styles.hint}>Keys: {item.answers.slice(0, 9).map((_, index) => index + 1).join(" / ")} reveal • R reset • ← / → change question • F fullscreen</p>
      </div>
      <div key={flash} className={`${styles.flash} ${flash ? styles.go : ""}`} aria-hidden="true" />
      <audio ref={ding} preload="auto" src="https://www.myinstants.com/media/sounds/family-feud-good-answer.mp3" />
      <audio ref={clap} preload="auto" src="https://www.myinstants.com/media/sounds/family-feud-clap.mp3" />
    </main>
  );
}
