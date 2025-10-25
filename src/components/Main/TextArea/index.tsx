import { useRef } from "react";
import { useWordCounter } from "../../../context/WordCounterProvider";
import { S_TextAreaInputContainer } from "./styles";
import { S_TextArea } from "../../../base/TextArea";

export default function TextArea() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { 
    input, 
    setInput,
    setSelectedText 
  } = useWordCounter();
  
  const handleChangeOrSelect = () => {
    const textArea = textAreaRef.current;
    if (!textArea) return;
  
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    
    const selectedText = textArea.value.substring(start, end);
    
    if (selectedText) {
      setSelectedText(selectedText)
    } else {
      setSelectedText("");
    } 
  }

  return (  
    <S_TextAreaInputContainer $gridArea="textArea">
      <p>Input</p>
      <S_TextArea 
        ref={textAreaRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onSelect={handleChangeOrSelect}
      />
    </S_TextAreaInputContainer>
  );
}