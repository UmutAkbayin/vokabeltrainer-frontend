import type {Vocabulary} from '@/features/vocabulary/vocabularySlice';

export const fetchVocabularies = async (amount: string) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/vokabeln/${amount}`
    );
    const vocabularies: Vocabulary[] = await response.json();
    return vocabularies;
  } catch (e) {
    console.error(e);
  }
};
