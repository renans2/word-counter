import React, { createContext, useContext, useState, type Dispatch, type SetStateAction } from "react"
import type { Mode } from "../types/Mode";
import { countAndSortWords } from "../utils/countAndSortWords";
import type { ProcessedWords } from "../types/ProcessedWords";
import useLocalStorage from "../hooks/useLocalStorage";

type WordCounterContextType = {
  processedWords: ProcessedWords;
  mode: Mode,
  setMode: Dispatch<SetStateAction<Mode>>;
  input: string,
  setInput: Dispatch<SetStateAction<string>>;
  selectedText: string,
  setSelectedText: Dispatch<SetStateAction<string>>;
  searchWord: string,
  setSearchWord: Dispatch<SetStateAction<string>>;
}

const WordCounterContext = createContext<WordCounterContextType | undefined>(undefined);

export default function WordCounterProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>("mostFrequent");
  const [input, setInput] = useLocalStorage<string>("wordcounter/input", "");
  const [selectedText, setSelectedText] = useState("");
  const [searchWord, setSearchWord] = useState("");
  
  const toBeProcessed = selectedText ? selectedText : input;
  const processedWords = countAndSortWords(toBeProcessed, mode, searchWord);

  return (
    <WordCounterContext value={{
      processedWords,
      mode,
      setMode,
      input,
      setInput,
      selectedText,
      setSelectedText,
      searchWord,
      setSearchWord,
    }}>
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
