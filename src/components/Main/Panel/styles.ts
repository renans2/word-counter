import styled from "styled-components";
import { S_Surface } from "../../../base/Surface";

export const S_Panel = styled(S_Surface)`
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 13px;
  grid-area: panel;
`;