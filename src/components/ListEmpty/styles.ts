import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  text-align: center;

  ${({ theme }: any) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_300};
  `}
`;

export const Logo = styled.Image`
  width: 56px;
  height: 56px;
  margin-bottom: 16px;
`;

export const Message = styled.Text`
  text-align: center;

  ${({ theme }: any) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_300};
  `}
`;

