import type { Theme } from "../../types/Theme";
import { S_Header, S_Heading } from "./styles";
import ToggleSwitch from "./ToggleSwitch";

type HeaderProps = {
  theme: Theme;
  toggleTheme: () => void;
};

export default function Header({ theme, toggleTheme }: HeaderProps) {
  return (
    <S_Header>
      <S_Heading>Word Counter</S_Heading>
      
      <ToggleSwitch 
        theme={theme} 
        toggleTheme={toggleTheme}
      />
    </S_Header>
  );
}
