import styled, { css } from "styled-components/native";

import { TouchableOpacity } from "react-native";

type Props = {
  concluida: boolean;
};

export const Container = styled(TouchableOpacity)`
  height: 64px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 24px 0;
  margin-bottom: 8px;
  position: relative;
`;

export const Title = styled.Text<Props>`
  width: 100%;
  margin-left: 56px;
  margin-right: 56px;
  ${({ theme }: any) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}

  ${({ theme, concluida }: any) =>
    concluida &&
    css`
      text-decoration: line-through;
      text-decoration-color: ${theme.COLORS.GRAY_300};
      color: ${theme.COLORS.GRAY_300};
    `}
`;

export const Checkbox = styled.TouchableOpacity<Props>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: solid 1px ${({ theme }: any) => theme.COLORS.BLUE};
  position: absolute;
  left: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ concluida }) =>
    concluida &&
    css`
      border: none;
    `}
`;
