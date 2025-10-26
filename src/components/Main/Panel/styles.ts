import styled from "styled-components";
import { S_Surface } from "../../../base/Surface";
import { fontSettings } from "../../../styles/fontSettings";

export const S_Panel = styled(S_Surface)`
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 13px;
  grid-area: panel;
`;

export const S_Select = styled(S_Surface).attrs({ as: "select" })`
  padding: 5px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: ${fontSettings.fontWeight.bold};
  font-size: ${fontSettings.fontSize.selectedMode};
`;

export const S_Input = styled(S_Surface).attrs({ as: "input" })`
  padding: 5px 10px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;
