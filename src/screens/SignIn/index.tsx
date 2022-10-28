import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
  Platform,
  Alert,
} from "react-native";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Yup from "yup";

import { useAuth } from "../../context/auth";
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  async function userValidation() {
    if (await AsyncStorage.getItem("@fallalert:user")) {
      const dataUser = JSON.parse(
        await AsyncStorage.getItem("@fallalert:user")
      );

      if (dataUser?.cpf) {
        navigation.navigate("Home");
      }
    }
  }

  async function handleSignIn() {
    try {
      const schema = Yup.object().shape({
        password: Yup.string().required("A senha é obrigatória"),
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um e-mail válido"),
      });

      await schema.validate({ email, password });

      signIn({ email, password });

      navigation.navigate("Home");
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert("Opa", error.message);
      } else {
        Alert.alert(
          "Erro na autenticação",
          "Ocorreu um erro ao fazer login, verifique as credenciais"
        );
      }
    }
  }

  function register() {
    navigation.navigate("SignUpFirstStep");
  }

  useEffect(() => {
    userValidation();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0}
        >
          <Form>
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType={"email-address"}
              autoCorrect={false}
              autoCapitalize={"none"}
              value={email}
              onChangeText={setEmail}
            />

            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </Form>

          <Footer>
            <Button
              title="Entrar"
              color={theme.colors.button}
              onPress={() => handleSignIn()}
            />

            <SignInButton onPress={register}>
              <ButtonText>Cadastrar-se</ButtonText>
            </SignInButton>
          </Footer>
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  );
}
