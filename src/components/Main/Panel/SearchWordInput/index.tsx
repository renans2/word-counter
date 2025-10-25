import { useWordCounter } from "../../../../context/WordCounterProvider";
import { S_Input } from "./styles";

export default function SearchWordInput() {
  const { 
    mode, 
    searchWord, 
    setSearchWord 
  } = useWordCounter();

  return (
    <>
      {mode === "searchWord" && (
        <S_Input
          type="text"
          id=""
          placeholder="Search..."
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
      )}
    </>
  );
}