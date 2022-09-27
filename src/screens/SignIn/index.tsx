import React from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from "react-native";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../../components/Form/Button";
import { Input } from "../../components/Form/Input";
import { PasswordInput } from "../../components/Form/PasswordInput";

import {
  Container,
  Header,
  Title,
  SubTitle,
  Form,
  SignInButton,
  ButtonText,
  Footer,
} from "./styles";

export function SignIn() {
  const theme = useTheme();
  const navigation = useNavigation();

  function login() {
    navigation.navigate("Home");
  }

  function register() {
    navigation.navigate("SignUpFirstStep");
  }
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <Title>Estamos{"\n"}quase lá.</Title>
        <SubTitle>
          Faça seu login para começar{"\n"}uma experiência incrível.
        </SubTitle>
      </Header>

      <Form>
        <Input
          iconName="mail"
          placeholder="E-mail"
          keyboardType={"email-address"}
          autoCorrect={false}
          autoCapitalize={"none"}
        />

        <PasswordInput iconName="lock" placeholder="Senha" />
      </Form>

      <Footer>
        <Button title="Entrar" color={theme.colors.button} onPress={login} />

        <SignInButton onPress={register}>
          <ButtonText>Cadastrar-se</ButtonText>
        </SignInButton>
      </Footer>
    </Container>
  );
}
