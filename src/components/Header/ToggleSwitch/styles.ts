import styled, { css } from "styled-components";

export const S_ThemeSwitch = styled.button<{
  $checked: boolean;
}>`
  border: none;
  background-color: ${({ theme }) => theme.colors.backgroundAccent};
  width: 65px;
  height: 35px;
  padding: 3px;
  display: flex;
  border-radius: 1000px;
  cursor: pointer;

  > span {
    height: 100%;
    aspect-ratio: 1/1;
    border-radius: 1000px;
    background-color: ${({ theme }) => theme.colors.backgroundSurface};
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ $checked }) => $checked && css`
      margin-left: auto;
    `}
  }
`;