import styled from "styled-components";
import { fontSettings } from "../../styles/fontSettings";

export const S_Header = styled.header`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: 768px) {
    padding: 10px;

    a {
      display: none;
    }
  }
`;

export const S_Heading = styled.header`
  font-weight: ${fontSettings.fontWeight.extraBold};
  font-size: ${fontSettings.fontSize.heading};
`;

export const S_RightSideOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  a {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: bold;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
