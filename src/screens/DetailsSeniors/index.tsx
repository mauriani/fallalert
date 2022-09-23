import React from "react";
import { useTheme } from "styled-components";

import { useNavigation, useRoute } from "@react-navigation/native";

import { Container, HeaderContainer, HeaderTitle } from "./styles";
import { BackButton } from "../../components/BackButton";

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
    </Container>
  );
}
