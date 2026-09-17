import type { Metadata } from "next";
import questions from "@/data/feud-questions.json";
import FeudGame from "./FeudGame";

export const metadata: Metadata = {
  title: "BCDS Dental Feud",
  description: "Play Dental Feud with the Brant County Dental Society.",
};

export default function FeudPage() {
  if (!questions.length || questions.some(({ question, answers }) =>
    !question.trim() || !answers.length || answers.some(answer => !answer.trim())
  )) {
    throw new Error("Each Dental Feud question needs question text and at least one non-empty answer.");
  }

  return <FeudGame questions={questions} />;
}
