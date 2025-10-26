import { S_ClearButton } from "../../../base/ClearButton";
import { S_SectionHeader } from "../../../base/SectionHeader";
import { S_TextArea } from "../../../base/TextArea";
import { useWordCounter } from "../../../context/WordCounterProvider";
import { S_Empty, S_SelectedTextContainer } from "./styles";

export default function SelectedText() {
  const { selectedText, setSelectedText } = useWordCounter();

  return (
    <S_SelectedTextContainer $gridArea="selectedText">
      <S_SectionHeader>
        <p>Selected text</p>
        <S_ClearButton 
          disabled={!selectedText}
          onClick={() => setSelectedText("")}
        >
          CLEAR
        </S_ClearButton>
      </S_SectionHeader>

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
