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
    overflow-x: hidden;
    overflow-y: scroll;
  }

  button:not(:disabled) {
    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  input:focus,
  textarea:focus,
  select:focus {
    outline: 3px solid ${({ theme }) => theme.colors.textSecondary};
  }

  *::selection {
    background: ${({ theme }) => theme.colors.textSecondary};
    color: ${({ theme }) => theme.colors.background};
  }

  *::-moz-selection {
    background: ${({ theme }) => theme.colors.textSecondary};
    color: ${({ theme }) => theme.colors.background};
  }
  
  ::-webkit-scrollbar {
    width: 10px;
    appearance: none;  
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.scrollBar};
    border-radius: 1000px;  
    cursor: pointer;
  }
`;
