import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)<{ dark: boolean }>`
  flex: 1;
  background-color: ${({ theme, dark }) =>
    dark ? theme.COLORS.GRAY_700 : theme.COLORS.GRAY_600};
`;

export const ContainerData = styled.View`
  flex: 1;
  padding: 24px;
  padding-bottom: 0;
  padding-top: 48px;
  background-color: ${({ theme }: any) => theme.COLORS.GRAY_600};
  position: relative;
`;

export const InputWithButton = styled.View`
  display: flex;
  position: absolute;
  top: -28px;
  z-index: 2;
  left: 24px;
  right: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
