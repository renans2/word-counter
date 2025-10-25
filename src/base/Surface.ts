import styled from "styled-components";

export const S_Surface = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSurface};
  border: ${({ theme }) => theme.border};
  border-radius: 10px;
  padding: 17px;
`;