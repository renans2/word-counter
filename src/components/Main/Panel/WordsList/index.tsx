import { AnimatePresence } from "motion/react";
import { useWordCounter } from "../../../../context/WordCounterProvider";
import { S_Frequency, S_List, S_ListItem, S_Word } from "./styles";

export default function WordsList() {
  const { processedWords: { sortedFrequencyMap } } = useWordCounter();

  return (
    <S_List>
      <AnimatePresence>
        {sortedFrequencyMap.map((word, i) => (
          <S_ListItem 
            key={word[0]}
            layout
            initial={{ x: -100 , opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
          >
            <S_Word>#{i + 1} - {word[0]}</S_Word>
            <S_Frequency>{word[1]}</S_Frequency>
          </S_ListItem>
        ))}
      </AnimatePresence>
    </S_List>
  );
}
