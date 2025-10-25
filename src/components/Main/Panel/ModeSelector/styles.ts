import styled from "styled-components";
import { S_Surface } from "../../../../base/Surface";
import { fontSettings } from "../../../../styles/fontSettings";

export const S_Select = styled(S_Surface).attrs({ as: "select" })`
  padding: 5px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: ${fontSettings.fontWeight.bold};
  font-size: ${fontSettings.fontSize.selectedMode};
`;