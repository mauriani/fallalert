import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const HeaderContainer = styled.View`
  width: 100%;
  height: 120px;

  background-color: ${({ theme }) => theme.colors.background};

  justify-content: flex-end;
  align-items: center;

  padding: 32px 24px;
`;

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.background_primary};
`;
