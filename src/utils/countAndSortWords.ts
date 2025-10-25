import type { Mode } from "../types/Mode";
import type { ProcessedWords } from "../types/ProcessedWords";

export function countAndSortWords(
  input: string,
  mode: Mode,
  searchWord: string
): ProcessedWords {
  const lowerCaseSearchWord = searchWord.toLowerCase();
  let splittedWords = input.match(/[A-Za-zÀ-ÖØ-öø-ÿ]+/g) ?? [] as string[];
  const numWords = splittedWords.length;

  if (mode === "searchWord") {
    splittedWords = splittedWords.filter(word => 
      word.toLowerCase().startsWith(lowerCaseSearchWord)
    );
  }

  const frequencyMap = new Map<string, number>();

  splittedWords.forEach(rawWord => {
    const word = rawWord.toLowerCase();

    if (frequencyMap.has(word)) {
      const freq = frequencyMap.get(word)!;
      frequencyMap.set(word, freq + 1);
    } else {
      frequencyMap.set(word, 1);
    }    
  });
  
  const sortedFrequencyMap = [...frequencyMap.entries()].sort(([w1, f1], [w2, f2]) => {
    if (f1 === f2) {
      return w1.localeCompare(w2);
    }

    if (mode === "leastFrequent")
      return f1 - f2;
    else 
      return f2 - f1;
  });

  return {
    numWords,
    sortedFrequencyMap
  };
}


