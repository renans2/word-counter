import type { Mode } from "../types/Mode";

export function countAndSortWords(
  input: string,
  mode: Mode,
  searchWord: string
): [string, number][] {
  let splittedWords = input.match(/[A-Za-zÀ-ÖØ-öø-ÿ]+/g) ?? [] as string[];

  if (mode === "searchWord") {
    splittedWords = splittedWords.filter(word => word.startsWith(searchWord));
  }

  const frequencyMap = new Map<string, number>();

  splittedWords.forEach(word => {
    if (frequencyMap.has(word)) {
      const freq = frequencyMap.get(word)!;
      frequencyMap.set(word, freq + 1);
    } else {
      frequencyMap.set(word, 1);
    }    
  });
  
  const sortedFrequencyMap = [...frequencyMap.entries()].sort(([, v1], [, v2]) => {
    if (mode === "leastFrequent")
      return v1 - v2;
    else 
      return v2 - v1;
  });

  return sortedFrequencyMap;
}


