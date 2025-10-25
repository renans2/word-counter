import { useWordCounter } from "../../context/WordCounterProvider";
import Panel from "./Panel";
import SelectedText from "./SelectedText";
import TextArea from "./TextArea";
import { S_Container, S_Main, S_NumWords } from "./styles";

export default function Main() {
  const { 
    processedWords: { numWords },
    selectedText,
  } = useWordCounter();

  const additionalText = selectedText ? "selected words" : "total words"

  return (
    <S_Main>
      <S_NumWords>{numWords} {additionalText}</S_NumWords>
      <S_Container>
        <TextArea />
        <SelectedText />
        <Panel />
      </S_Container>
    </S_Main>
  );
}