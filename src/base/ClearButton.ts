import styled from "styled-components";

export const S_ClearButton = styled.button`
  margin-left: 10px;
  padding: 0 6px;
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
