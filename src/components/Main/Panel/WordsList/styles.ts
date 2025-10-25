import styled from "styled-components";
import { fontSettings } from "../../../../styles/fontSettings";
import { motion } from "motion/react";

export const S_List = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 4px;
  overflow-y: auto;
`;

export const S_ListItem = styled(motion.li)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1px;
  list-style: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export const S_Word = styled.span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: ${fontSettings.fontWeight.medium};
`;

export const S_Frequency = styled.span`
  background-color: ${({ theme }) => theme.colors.backgroundAccent};
  padding: 2px 10px;
  border-radius: 7px;
  color: ${({ theme }) => theme.colors.textAccent};
  font-weight: ${fontSettings.fontWeight.bold};
  font-size: ${fontSettings.fontSize.wordFreq};
`;
