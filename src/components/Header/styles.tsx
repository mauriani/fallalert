import styled from "styled-components/native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";

import { RFValue } from "react-native-responsive-fontsize";

export const HeaderContainer = styled.View`
  width: 100%;
  height: 115px;

  background-color: ${({ theme }) => theme.colors.shape_line};

  justify-content: flex-end;

  padding: 30px 24px;

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const Logo = styled.Image`
  width: ${RFValue(200)}px;
  height: ${RFValue(110)}px;

  margin-top: 10px;
`;
