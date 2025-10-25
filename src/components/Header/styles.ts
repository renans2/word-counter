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
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const S_Heading = styled.header`
  font-weight: ${fontSettings.fontWeight.extraBold};
  font-size: ${fontSettings.fontSize.heading};
`;
