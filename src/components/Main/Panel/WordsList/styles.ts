import styled from "styled-components";
import { fontSettings } from "../../../../styles/fontSettings";
import { motion } from "motion/react";
import { S_Surface } from "../../../../base/Surface";

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

export const S_ShowMoreButton = styled(S_Surface).attrs({ as: "button"})`
  padding: 8px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: bold;
  font-size: ${fontSettings.fontSize.seeMoreButton};

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.backgroundAccent};
    color: ${({ theme }) => theme.colors.textAccent};
    border-color: transparent;
  }
`;

export const S_FeedbackText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-block: 6px;
`;
