export const fetchVocabularies = async (amount: number) => {
  const response = await fetch(`http://localhost:8080/api/vokabeln/${amount}`);
  const vocabularies = await response.json();
  return vocabularies;
};