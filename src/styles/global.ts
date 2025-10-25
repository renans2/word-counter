import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
  }

  button:not(:disabled) {
    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }

  *::selection {
    background: ${({ theme }) => theme.colors.textSecondary};
    color: ${({ theme }) => theme.colors.background};
  }

  *::-moz-selection {
    background: ${({ theme }) => theme.colors.textSecondary};
    color: ${({ theme }) => theme.colors.background};
  }
`;