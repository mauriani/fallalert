import styled, { css } from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";

interface IPropsButton {
  enabled: boolean;
  loading: boolean;
}

export const Container = styled.TouchableOpacity<IPropsButton>`
  justify-content: center;
  align-items: center;

  height: ${RFValue(45)}px;

  border-radius: 10px;
  padding: 18px;

  margin: 10px 10px 10px 10px;

  background-color: ${({ theme }) => theme.colors.main};

  ${({ enabled, loading }) =>
    enabled == false || loading == true
      ? css`
          opacity: 0.5;
        `
      : css`
          opacity: 1;
        `};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(14)}px;
  height: ${RFValue(26)}px;

  width: 100%;
  padding-top: 5px;

  text-align: center;
`;
