import styled from "styled-components";

export const S_SectionContainer = styled.div<{
  $gridArea: "selectedText" | "textArea" | "panel";
}>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 100%;
  grid-area: ${({ $gridArea }) => $gridArea};

  & p {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;
