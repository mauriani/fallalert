import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const HeaderContainer = styled.View`
  width: 100%;
  height: 115px;

  background-color: ${({ theme }) => theme.colors.header};

  flex-direction: row;
  align-items: center;

  padding: 30px;
`;

export const ContainerBack = styled.View`
  width: 10%;
  height: 100%;

  align-items: center;
  justify-content: flex-end;
`;

export const HeaderCenter = styled.View`
  width: 90%;
  height: 100%;

  align-items: center;
  justify-content: flex-end;
`;

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  color: ${({ theme }) => theme.colors.background_primary};
`;
