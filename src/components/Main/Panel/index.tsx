import { S_SectionContainer } from "../../../base/SectionContainer";
import ModeSelector from "./ModeSelector";
import SearchWordInput from "./SearchWordInput";
import { S_Panel } from "./styles";
import WordsList from "./WordsList";

export default function Panel() {
  return (
    <S_SectionContainer $gridArea="panel">
      <p>Details</p>
      <S_Panel>
        <ModeSelector />
        <SearchWordInput />
        <WordsList />
      </S_Panel>
    </S_SectionContainer>
  );
}
