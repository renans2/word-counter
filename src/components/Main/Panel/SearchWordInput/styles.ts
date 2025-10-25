import styled from "styled-components";
import { S_Surface } from "../../../../base/Surface";

export const S_Input = styled(S_Surface).attrs({ as: "input" })`
  padding: 5px 10px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;