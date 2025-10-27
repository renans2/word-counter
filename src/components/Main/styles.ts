import styled from "styled-components";
import { fontSettings } from "../../styles/fontSettings";

export const S_Main = styled.main`
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
  margin-top: 50px;
  padding: 0 15px;

  @media (max-width: 768px) {
    margin-top: 15px;
    padding: 0 10px;
    padding-bottom: 10px;
  }
`;

export const S_NumWords = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: ${fontSettings.fontWeight.bold};
  font-size: ${fontSettings.fontSize.numWords};
`;

export const S_Container = styled.div`
  height: 55vh;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 65% 35%;
  grid-template-rows: 30% 70%;
  grid-template-areas:
    "selectedText panel"
    "textArea panel";
  gap: 10px;

  @media (max-width: 768px) {
    height: auto;
    grid-template-columns: 100%;
    grid-template-rows: 500px 200px 500px;
    grid-template-areas:
      "textArea"
      "selectedText"
      "panel";
    gap: 20px;
  }
`;
