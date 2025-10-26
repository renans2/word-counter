import { useEffect } from "react";
import { S_SectionContainer } from "../../../base/SectionContainer";
import { filterAndSortFrequencyMap } from "../../../utils/sortFrequencyMap";
import { S_Input, S_Panel, S_Select } from "./styles";
import WordsList from "./WordsList";
import type { Mode } from "../../../types/Mode";
import { useWordCounter } from "../../../context/WordCounterProvider";
import useLocalStorage from "../../../hooks/useLocalStorage";

export default function Panel() {
  const { frequencyMap } = useWordCounter();
  const [mode, setMode] = 
    useLocalStorage<Mode>("wordcounter/mode", "topFrequent");
  const [searchWord, setSearchWord] = 
    useLocalStorage<string>("wordcounter/searchWord", "");
  
  const words = filterAndSortFrequencyMap(
    frequencyMap,
    mode === "leastFrequent" ? "ascending" : "descending",
    mode === "searchWord" ? searchWord.trim().toLowerCase() : undefined
  );

  useEffect(() => {
    if (mode !== "searchWord")
      setSearchWord("");
  }, [mode]);

  return (
    <S_SectionContainer $gridArea="panel">
      <p>Details</p>
      <S_Panel>
        <S_Select
          id="mode"
          value={mode}
          onChange={(e) => setMode(e.target.value as Mode)}
        >
          <option value="topFrequent">Top Words</option>
          <option value="leastFrequent">Least frequent Words</option>
          <option value="searchWord">Search Word</option>
        </S_Select>

        {mode === "searchWord" && (
          <S_Input
            type="text"
            id=""
            placeholder="Search..."
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
          />
        )}

        <p>{words.length} unique words</p>
        
        <WordsList 
          words={words}
        />
      </S_Panel>
    </S_SectionContainer>
  );
}
