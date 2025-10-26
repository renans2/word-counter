import type { Theme } from "../../types/Theme";
import { S_Header, S_Heading, S_RightSideOptions } from "./styles";
import ToggleSwitch from "./ToggleSwitch";

type HeaderProps = {
  theme: Theme;
  toggleTheme: () => void;
};

export default function Header({ theme, toggleTheme }: HeaderProps) {
  return (
    <S_Header>
      <S_Heading>Word Counter</S_Heading>

      <S_RightSideOptions>
        <a href="https://github.com/renans2/word-counter" target="_blank" rel="noopener noreferrer">GitHub</a>
        <ToggleSwitch 
          theme={theme} 
          toggleTheme={toggleTheme}
        />
      </S_RightSideOptions>
      
    </S_Header>
  );
}
