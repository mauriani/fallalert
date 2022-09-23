import React from "react";
import Lottie from "lottie-react-native";
import { useTheme } from "styled-components";
import { useNavigation, useRoute } from "@react-navigation/native";

import {
  Container,
  HeaderContainer,
  HeaderTitle,
  Card,
  CardTitle,
  Content,
  Title,
  Informations,
  Status,
} from "./styles";
import { BackButton } from "../../components/BackButton";

import heartbeat from "../../assets/heartbeat.json";
import bloodPressure from "../../assets/bloodPressure.json";

export function DetailsSeniors() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <HeaderContainer>
        <BackButton onPress={handleGoBack} color={theme.colors.shape} />
        <HeaderTitle>Detalhes</HeaderTitle>
      </HeaderContainer>

      <Card>
        <CardTitle>Emanuel Silva</CardTitle>
      </Card>

      <Content>
        <Title>Frequência Cardíaca</Title>
        <Informations>
          <Lottie
            source={heartbeat}
            autoPlay
            style={{ height: 150 }}
            resizeMode="contain"
            loop={true}
          />

          <Status>60 bpm</Status>
        </Informations>

        <Title>Pressão arterial</Title>
        <Informations>
          <Lottie
            source={bloodPressure}
            autoPlay
            style={{ height: 150 }}
            resizeMode="contain"
            loop={true}
          />

          <Status>120x80 mmHg</Status>
        </Informations>
      </Content>
    </Container>
  );
}
