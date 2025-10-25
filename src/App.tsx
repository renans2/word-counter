import WordCounterProvider from "./context/WordCounterProvider";
import { ThemeProvider } from "styled-components";
import { dark } from "./styles/themes/dark";
import { light } from "./styles/themes/light";
import { GlobalStyles } from "./styles/global";
import Header from "./components/Header";
import type { Theme } from "./types/Theme";
import Main from "./components/Main";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  const [theme, setTheme] = useLocalStorage<Theme>("wordcounter/theme", "light");

  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <GlobalStyles />
      <WordCounterProvider>
        <Header 
          theme={theme} 
          toggleTheme={() => setTheme(prev => prev === "dark" ? "light" : "dark")}
        />
        <Main />
      </WordCounterProvider>
    </ThemeProvider>
  );
}
