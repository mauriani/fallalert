import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const HeaderContainer = styled.View`
  width: 100%;
  height: 115px;

  background-color: ${({ theme }) => theme.colors.header};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 30px;
`;

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  color: ${({ theme }) => theme.colors.background_primary};
`;

export const ContentPhoto = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const PhotoContainer = styled.View`
  width: 150px;
  height: 150px;

  border-radius: 75px;

  background-color: ${({ theme }) => theme.colors.shape};
  margin-top: 48px;
`;

export const Photo = styled.Image`
  width: 150px;
  height: 150px;

  border-radius: 75px;
`;

export const PhotoButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.main};

  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export const Content = styled.View`
  padding: 0 24px;
`;

export const Form = styled.View`
  width: 100%;
  margin-top: 64px;

  margin-bottom: 16px;
`;
