import styled from "styled-components/native";

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

export const FabButton = styled.TouchableOpacity`
  position: absolute;
  right: ${RFValue(20)}px;
  bottom: ${RFValue(20)}px;

  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;

  align-items: center;
  justify-content: center;

  border-radius: ${RFValue(25)}px;

  background-color: ${({ theme }) => theme.colors.main};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.text};

  font-size: ${RFValue(16)}px;
  text-align: center;
`;
