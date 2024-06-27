import styled, { css } from "styled-components/native";

import { TextInput } from "react-native";

export const Container = styled(TextInput)`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  border-radius: 6px;
  padding: 16px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_500};
    color: ${theme.COLORS.GRAY_100};

    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`;
