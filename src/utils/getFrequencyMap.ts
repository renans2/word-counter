import type { FrequencyMap } from "../types/FrequencyMap";

export function getFrequencyMap(rawWords: string[]): FrequencyMap {
  const frequencyMap = new Map<string, number>();

  rawWords.forEach(rawWord => {
    const word = rawWord.toLowerCase();

    if (frequencyMap.has(word)) {
      const freq = frequencyMap.get(word)!;
      frequencyMap.set(word, freq + 1);
    } else {
      frequencyMap.set(word, 1);
    }    
  });

  return frequencyMap;
}
