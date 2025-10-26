import { useWordCounter } from "../../context/WordCounterProvider";
import Panel from "./Panel";
import SelectedText from "./SelectedText";
import TextArea from "./TextArea";
import { S_Container, S_Main, S_NumWords } from "./styles";

export default function Main() {
  const { numWords, selectedText } = useWordCounter();

  const selectedOrTotalText = selectedText ? "selected" : "total";
  const wordOrWordsText = numWords === 1 ? "word" : "words";

  return (
    <S_Main>
      <S_NumWords>
        {numWords} {selectedOrTotalText} {wordOrWordsText}
      </S_NumWords>
      <S_Container>
        <TextArea />
        <SelectedText />
        <Panel />
      </S_Container>
    </S_Main>
  );
}
