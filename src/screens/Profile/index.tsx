import React, { useState } from "react";
import { useTheme } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Header,
  HeaderTop,
  HeaderTitle,
  LogoutButton,
  PhotoContainer,
  PhotoButton,
  Photo,
  Content,
  Options,
  Option,
  OptionTitle,
} from "./styles";

export function Profile() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [option, setOption] = useState<"dataEdit" | "passwordEdit">("dataEdit");

  function handleOptionChange(optionSelected: "dataEdit" | "passwordEdit") {
    setOption(optionSelected);
  }

  function handleBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <HeaderTop>
          {/* <BackButton color={theme.colors.shape} onPress={handleBack} /> */}
          <HeaderTitle>Editar Perfil</HeaderTitle>
          <LogoutButton onPress={() => {}}>
            <Feather name="power" size={24} color={theme.colors.shape} />
          </LogoutButton>
        </HeaderTop>

        <PhotoContainer>
          <Photo
            source={{
              uri: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            }}
          />

          <PhotoButton onPress={() => {}}>
            <Feather name="camera" size={24} color={theme.colors.shape} />
          </PhotoButton>
        </PhotoContainer>
      </Header>

      <Content>
        <Options>
          <Option
            active={option === "dataEdit"}
            onPress={() => handleOptionChange("dataEdit")}
          >
            <OptionTitle active={option === "dataEdit"}>Dados</OptionTitle>
          </Option>

          <Option
            active={option === "passwordEdit"}
            onPress={() => handleOptionChange("passwordEdit")}
          >
            <OptionTitle active={option === "passwordEdit"}>
              Trocar senha
            </OptionTitle>
          </Option>
        </Options>
      </Content>
    </Container>
  );
}
