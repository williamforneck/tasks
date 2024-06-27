import { View } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Message = styled.Text`
  text-align: center;

  ${({ theme }: any) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_300};
  `}
`;

export const Info = styled.View`
  flex-direction: row;
  gap: 8px;
  margin-bottom: 12px;
`;

export const Card = styled(View)`
  background-color: ${({ theme }: any) => theme.COLORS.GRAY_400};
  padding: 2px 8px;
  border-radius: 50%;
`;

export const TextCard = styled.Text`
  ${({ theme }: any) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Title = styled.Text<{ secondary?: boolean }>`
  ${({ theme, secondary }: any) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${secondary ? theme.COLORS.PURPLE : theme.COLORS.BLUE};
  `}
`;
