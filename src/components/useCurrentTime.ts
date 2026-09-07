"use client";
import { useEffect, useState } from "react";

export function useCurrentTime() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    const frame = requestAnimationFrame(() => setNow(new Date()));
    const timer = setInterval(() => setNow(new Date()), 60_000);
    return () => {
      cancelAnimationFrame(frame);
      clearInterval(timer);
    };
  }, []);
  return now;
}
