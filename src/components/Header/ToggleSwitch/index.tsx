import { Moon, Sun } from "lucide-react";
import type { Theme } from "../../../types/Theme";
import { S_ThemeSwitch } from "./styles";
import { useTheme } from "styled-components";

type ToggleSwitchProps = {
  theme: Theme;
  toggleTheme: () => void;
};

export default function ToggleSwitch({ theme, toggleTheme }: ToggleSwitchProps) {
  const { colors: { textSecondary } } = useTheme();

  return (
    <S_ThemeSwitch 
      type="button" 
      onClick={toggleTheme}
      $checked={theme === "dark"}
    >
      <span>
        {theme === "dark" ? (
          <Moon color={textSecondary} />
        ) : (
          <Sun color={textSecondary} />
        )}
      </span>
    </S_ThemeSwitch>
  );
}