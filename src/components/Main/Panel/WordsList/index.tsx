import { AnimatePresence } from "motion/react";
import { S_FeedbackText, S_Frequency, S_List, S_ListItem, S_ShowMoreButton, S_Word } from "./styles";
import { useEffect, useState } from "react";
import { INCREMENT_ITEMS_TO_SHOW, INITIAL_ITEMS_TO_SHOW } from "../../../../constants/items";

type WordsListProps = {
  words: [string, number][];
}

export default function WordsList({
  words
}: WordsListProps) {
  const [itemsToShow, setItemsToShow] = useState(INITIAL_ITEMS_TO_SHOW);

  const handleShowMore = () => {
    setItemsToShow(prev => prev + INCREMENT_ITEMS_TO_SHOW);
  }
  
  useEffect(() => {
    setItemsToShow(10);
  }, [words]);

  const toShow = words.slice(0, itemsToShow);
  const limitExceeded = itemsToShow >= words.length;

  return (
    <>
      {words.length === 0 ? (
        <S_FeedbackText>No words to show!</S_FeedbackText>
      ) : (
        <S_List>
          <AnimatePresence>
            {toShow.map((word, i) => (
              <S_ListItem 
                key={word[0]}
                layout
                initial={{ x: -100 , opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ ease: "easeInOut", duration: 0.3 }}
              >
                <S_Word title={`${word[0]}, ${word[1]} appearances`}>#{i + 1} - {word[0]}</S_Word>
                <S_Frequency>{word[1]}</S_Frequency>
              </S_ListItem>
            ))}
          </AnimatePresence>
          
          {limitExceeded ? (
            <S_FeedbackText>No more words!</S_FeedbackText>
          ) : (
            <S_ShowMoreButton onClick={handleShowMore}>Show more</S_ShowMoreButton>
          )}

        </S_List>
      )}
    </>
  );
}
