import styled from "styled-components/native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";

import { RFValue } from "react-native-responsive-fontsize";

export const HeaderContainer = styled.View`
  width: 100%;
  height: 115px;

  background-color: ${({ theme }) => theme.colors.header};

  justify-content: flex-end;
  align-items: center;

  padding: 30px 24px;
`;

export const Logo = styled.Image`
  width: ${RFValue(200)}px;
  height: ${RFValue(110)}px;

  margin-top: 10px;
`;

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  color: ${({ theme }) => theme.colors.background_primary};
  text-transform: uppercase;
`;
