import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TextInputMask } from "react-native-masked-text";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
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

export const Content = styled.ScrollView`
  padding: 0 24px;
  height: ${RFValue(300)}px;
`;

export const Form = styled.View`
  width: 100%;
  margin-top: 64px;

  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text};

  font-size: ${RFValue(13)}px;
  margin: 10px 0px;
  text-transform: uppercase;
`;

export const MaskInput = styled(TextInputMask)`
  height: 56px;
  justify-content: center;
  align-items: center;

  margin-bottom: 8px;
  padding: 0 10px;

  background-color: ${({ theme }) => theme.colors.background_secondary};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
`;
