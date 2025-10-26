import { useRef, useState } from "react";
import { useWordCounter } from "../../../context/WordCounterProvider";
import { S_TextAreaInputContainer } from "./styles";
import { S_TextArea } from "../../../base/TextArea";
import { S_SectionHeader } from "../../../base/SectionHeader";
import { S_ClearButton } from "../../../base/ClearButton";

export default function TextArea() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { 
    input, 
    setInput,
    setSelectedText 
  } = useWordCounter();
  const [textAreaInput, setTextAreaInput] = useState(input);
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setTextAreaInput(value);
    setSelectedText("");

    const id = timeoutId.current;
    if (id) clearTimeout(id);

    const newId = setTimeout(() => setInput(value), 550);
    timeoutId.current = newId;
  }

  const handleSelect = () => {
    const textArea = textAreaRef.current;
    if (!textArea) return;
  
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    
    const selectedText = textArea.value.substring(start, end);
    
    if (selectedText) {
      setSelectedText(selectedText);
    }
  }

  return (  
    <S_TextAreaInputContainer $gridArea="textArea">
      <S_SectionHeader>
        <p>Input</p>
        <S_ClearButton 
          disabled={!textAreaInput}
          onClick={() => {
            setTextAreaInput("");
            setInput("");
            setSelectedText("");
          }}
        >
          CLEAR
        </S_ClearButton>
      </S_SectionHeader>
      <S_TextArea 
        ref={textAreaRef}
        value={textAreaInput}
        placeholder="Start typing here..."
        onChange={handleChange}
        onSelect={handleSelect}
      />
    </S_TextAreaInputContainer>
  );
}