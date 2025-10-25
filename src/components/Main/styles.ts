import styled from "styled-components";
import { fontSettings } from "../../styles/fontSettings";

export const S_Main = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 50px auto 0 auto;
  padding: 0 15px;
`;

export const S_NumWords = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: ${fontSettings.fontWeight.bold};
  font-size: ${fontSettings.fontSize.numWords};
`;

export const S_Container = styled.div`
  height: 600px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 65% 35%;
  grid-template-rows: 30% 70%;
  grid-template-areas:
    "selectedText panel"
    "textArea panel";
  gap: 10px;
`;
