import { S_TextArea } from "../../../base/TextArea";
import { useWordCounter } from "../../../context/WordCounterProvider";
import { S_Empty, S_SelectedTextContainer } from "./styles";

export default function SelectedText() {
  const { selectedText } = useWordCounter();

  return (
    <S_SelectedTextContainer $gridArea="selectedText">
      <div>
        <p>Selected text</p>
        <button>CLEAR</button>
      </div>
      {selectedText ? (
        <S_TextArea 
          $isSelectedTextArea
          value={selectedText}
          disabled
        />  
      ) : (
        <S_Empty>Select text from your input to see detailed information</S_Empty>
      )}
    </S_SelectedTextContainer>    
  );
}
