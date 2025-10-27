import styled from "styled-components";

export const S_Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5px;

  background-color: ${({ theme }) => theme.colors.backgroundAccent};
  color: ${({ theme }) => theme.colors.textAccent};

  a {
    color: ${({ theme }) => theme.colors.textAccent};
    opacity: 0.7;
  }

  a:hover {
    opacity: 1;
  }

  em {
    color: red;
    font-style: normal;
  }

  @media (max-width: 768px) {
    position: relative;
  }
`;