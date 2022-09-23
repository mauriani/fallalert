import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
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

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};

  font-size: ${RFValue(13)}px;
  margin-top: 15px;
  text-transform: uppercase;

  padding: 0 16px;
`;

export const Card = styled.View`
  height: 70px;
  padding: 24px;
  border-radius: 8px;
  margin: 10px 10px;

  background-color: ${({ theme }) => theme.colors.background_primary};

  align-items: center;
  justify-content: center;
`;

export const CardTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_700};
  color: ${({ theme }) => theme.colors.title};

  font-size: ${RFValue(12)}px;
`;

export const Content = styled.View``;

export const Informations = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 30px;
`;

export const Status = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.shape_dark};

  font-size: ${RFValue(20)}px;
  margin-top: 8px;
  text-transform: uppercase;
`;
