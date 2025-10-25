import { useWordCounter } from "../../../../context/WordCounterProvider";
import type { Mode } from "../../../../types/Mode";
import { S_Select } from "./styles";

export default function ModeSelector() {
  const { mode, setMode } = useWordCounter();

  return (
    <S_Select
      id="mode"
      value={mode}
      onChange={(e) => setMode(e.target.value as Mode)}
    >
      <option value="mostFrequent">Top Words</option>
      <option value="leastFrequent">Least frequent Words</option>
      <option value="searchWord">Search Word</option>
    </S_Select>
  );
}
