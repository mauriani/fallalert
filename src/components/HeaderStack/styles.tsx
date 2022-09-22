import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const HeaderContainer = styled.View`
  width: 100%;
  height: 115px;

  background-color: ${({ theme }) => theme.colors.shape_line};

  justify-content: flex-end;

  padding: 30px 24px;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.shape_dark};
`;
