import styled from "styled-components";
import { S_Surface } from "../../../base/Surface";
import { S_SectionContainer } from "../../../base/SectionContainer";

export const S_SelectedTextContainer = styled(S_SectionContainer)`
  grid-area: selectedText;
`;

export const S_Empty = styled(S_Surface).attrs({ as: "div" })`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  opacity: 0.5;
  user-select: none;
`;
