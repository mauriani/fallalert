import React from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
  Platform,
  ScrollView,
} from "react-native";
import { useTheme } from "styled-components";
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
  Content,
} from "./styles";

export function SignIn() {
  const theme = useTheme();
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
    >
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />

        <Content>
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
            <Button title="Entrar" color={theme.colors.button} />

            <SignInButton>
              <ButtonText>Cadastrar-se</ButtonText>
            </SignInButton>
          </Footer>
        </Content>
      </Container>
    </ScrollView>
  );
}
