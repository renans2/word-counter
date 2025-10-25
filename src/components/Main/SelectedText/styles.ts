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

export const S_SectionHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const S_ClearButton = styled.button`
  margin-left: 10px;
  padding: 4px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  border: none;
  border-radius: 5px;
  font-weight: 900;
  text-decoration: underline;
  font-size: 1rem;
  cursor: pointer;
  
  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.backgroundSurface};
  }
`;
