import React, { createContext, useContext, type Dispatch, type SetStateAction } from "react"
import { getFrequencyMap } from "../utils/getFrequencyMap";
import useLocalStorage from "../hooks/useLocalStorage";
import type { FrequencyMap } from "../types/FrequencyMap";
import { SPLIT_RULE } from "../constants/splitRule";

type WordCounterContextType = {
  frequencyMap: FrequencyMap;
  numWords: number;
  input: string,
  setInput: Dispatch<SetStateAction<string>>;
  selectedText: string,
  setSelectedText: Dispatch<SetStateAction<string>>;
}

const WordCounterContext = createContext<WordCounterContextType | undefined>(undefined);

export default function WordCounterProvider({ children }: { children: React.ReactNode }) {
  const [input, setInput] = useLocalStorage<string>("wordcounter/input", "");
  const [selectedText, setSelectedText] = useLocalStorage<string>("wordcounter/selectedText", "");
  
  const toBeProcessed = selectedText ? selectedText : input;
  const splittedWords = toBeProcessed.match(SPLIT_RULE) ?? [] as string[];
  const numWords = splittedWords.length;
  const frequencyMap = getFrequencyMap(splittedWords);

  return (
    <WordCounterContext 
      value={{
        frequencyMap,
        numWords,
        input,
        setInput,
        selectedText,
        setSelectedText,
      }}
    >
      {children}
    </WordCounterContext>
  );
}

export const useWordCounter = () => {
  const context = useContext(WordCounterContext);
  
  if (!context) 
    throw new Error("The useWordCounter hook must be used within WordCounterProvider");

  return context;
}
