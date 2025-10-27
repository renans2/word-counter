import styled from "styled-components";
import { S_Surface } from "./Surface";

export const S_TextArea = styled(S_Surface).attrs({ as: "textarea" })<{
  $isSelectedTextArea?: boolean;
}>`
  flex: 1;
  height: 100%;
  width: 100%;
  resize: none;
  color: ${({ theme, $isSelectedTextArea }) =>
    $isSelectedTextArea
      ? theme.colors.textSecondary
      : theme.colors.textPrimary};
  font-style: ${({ $isSelectedTextArea }) => $isSelectedTextArea && "italic"};
  font-weight: ${({ $isSelectedTextArea }) => $isSelectedTextArea && "350"};

  &::placeholder {
    opacity: 0.5;
  }
`;
