import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const CardHome = styled.TouchableOpacity`
  height: 115px;

  background-color: ${({ theme }) => theme.colors.background_secondary};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 24px;
  border-radius: 8px;

  margin: 10px 10px;
`;

export const Details = styled.View``;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.title};

  font-size: ${RFValue(12)}px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};

  font-size: ${RFValue(10)}px;
  margin-top: 8px;
  text-transform: uppercase;
`;

export const CardImage = styled.Image`
  width: 80px;
  height: 80px;

  border-radius: 40px;
`;
