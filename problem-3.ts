/**
 *  **Problem 3:**
 *  > Create a TypeScript function called countWordOccurrences that accepts a sentence
 *  (string) and a word (string). The function should return the number of times the
 *  word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.
 *  ---
 *  - Input: `"I love typescript", "typescript"`
 *  ---
 *  - Output: `1`
 *
 */

const countWordOccurrences = (sentence: string, word: string): number => {
  let wordOccurrences = 0;
  const sentenceToWordArray = sentence.toLowerCase().split(" ");

  sentenceToWordArray.forEach((w) => w === word && wordOccurrences++);

  return wordOccurrences;
};

console.log(countWordOccurrences("I love typescript", "typescript"));
