import React from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { PasswordInput } from "../../../components/Form/PasswordInput";
import { Button } from "../../../components/Form/Button";

import {
  Container,
  Header,
  Steps,
  Title,
  SubTitle,
  Form,
  FormTitle,
} from "./styles";

export function SignUpSecondStep() {
  const navigation = useNavigation();
  const theme = useTheme();

  function handleBack() {
    navigation.goBack();
  }

  function registerSignUp() {
    navigation.navigate("Home");
  }
  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor="transparent"
          />
          <Header>
            <BackButton onPress={handleBack} />

            <Steps>
              <Bullet />
              <Bullet active />
            </Steps>
          </Header>

          <Title>Crie sua{"\n"}conta</Title>
          <SubTitle>Faça seu cadastro de{"\n"}forma rápida e fácil.</SubTitle>

          <Form>
            <FormTitle>02. Senha</FormTitle>

            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              secureTextEntry
              // value={password}
              // onChangeText={setPassword}
            />

            <PasswordInput
              iconName="lock"
              placeholder="Repetir Senha"
              secureTextEntry
              // value={passwordConfirm}
              // onChangeText={setPasswordConfirm}
            />
          </Form>

          <Button
            title="Cadastrar"
            color={theme.colors.success}
            onPress={registerSignUp}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
