import React, { createContext, useContext, useState, type Dispatch, type SetStateAction } from "react"
import type { Mode } from "../types/Mode";
import { countAndSortWords } from "../utils/countAndSortWords";

type WordCounterContextType = {
  words: [string, number][];
  mode: Mode,
  setMode: Dispatch<SetStateAction<Mode>>;
  input: string,
  setInput: Dispatch<SetStateAction<string>>;
  searchWord: string,
  setSearchWord: Dispatch<SetStateAction<string>>;
}

const WordCounterContext = createContext<WordCounterContextType | undefined>(undefined);

export default function WordCounterProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>("mostFrequent");
  const [input, setInput] = useState("");
  const [searchWord, setSearchWord] = useState("");
  
  const words = countAndSortWords(input, mode, searchWord);

  return (
    <WordCounterContext value={{
      words,
      mode,
      setMode,
      input,
      setInput,
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
