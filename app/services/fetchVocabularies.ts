import type { Vocabulary } from "@/app/features/vocabularies/vocabulariesSlice";

export const fetchVocabularies = async (amount: string) => {
  const response = await fetch(`http://localhost:8080/api/vokabeln/${amount}`);
  const vocabularies: Vocabulary[] = await response.json();
  return vocabularies;
};