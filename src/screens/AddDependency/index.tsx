import React, { useState } from "react";
import { View } from "react-native";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import { BackButton } from "../../components/BackButton";
import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";

import profileAvatar from "../../assets/bighead.png";
import {
  Container,
  ContentPhoto,
  PhotoContainer,
  Photo,
  PhotoButton,
  Content,
  Form,
} from "./styles";
import { HeaderStack } from "../../components/HeaderStack";

export function AddDependency() {
  const theme = useTheme();
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [imgSenior, setImgSenior] = useState();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <HeaderStack title={"Adicionar Dependente"} />

      <ContentPhoto>
        <PhotoContainer>
          <Photo source={profileAvatar} />

          <PhotoButton onPress={() => {}}>
            <Feather name="camera" size={24} color={theme.colors.shape} />
          </PhotoButton>
        </PhotoContainer>
      </ContentPhoto>

      <Content>
        <Form>
          <Input iconName="user" placeholder="Nome" />
          <Input iconName="user" placeholder="Grau de parentesco" />
          <Input iconName="credit-card" placeholder="CPF" />
          <Input iconName="phone" placeholder="Telefone" />
          <Input iconName="home" placeholder="CEP" />
          <Input iconName="home" placeholder="Rua" />
          <Input iconName="home" placeholder="Bairro" />
          <Input iconName="home" placeholder="Número" />
        </Form>

        <Button title="Adicionar" onPress={() => {}} />
      </Content>
    </Container>
  );
}
