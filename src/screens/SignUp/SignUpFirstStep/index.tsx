import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
  Alert,
  Platform,
  ScrollView,
} from "react-native";
import * as Yup from "yup";
import { cpf } from "cpf-cnpj-validator";

import { useNavigation } from "@react-navigation/native";

import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { Input } from "../../../components/Form/Input";
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

export function SignUpFirstStep() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [cpfUser, setCpfUser] = useState("");

  async function handleNextStep() {
    try {
      const schema = Yup.object().shape({
        cpfUser: Yup.string()
          .required()
          .test("test-invalid-cpf", "cpf inválido", (value) =>
            cpfIsInvalid(value)
          ),
        email: Yup.string()
          .email("E-mail inválido")
          .required("E-mail é obrigatório"),

        name: Yup.string().required("Nome é obrigatório"),
      });

      const data = { name, email, cpfUser };

      await schema.validate(data);

      navigation.navigate("SignUpSecondStep", {
        user: data,
      });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        return Alert.alert("Opa", error.message);
      }
    }
  }

  function cpfIsInvalid(value) {
    let cpfFormatted = value.replace(/\D/g, "");

    if (cpfFormatted.toString().length >= 11) {
      const valid = cpf.isValid(cpfFormatted);

      if (valid == false) {
        return false;
      } else {
        return true;
      }
    }
  }

  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0}
      >
        <Container>
          <ScrollView>
            <StatusBar
              barStyle="dark-content"
              translucent
              backgroundColor="transparent"
            />
            <Header>
              <BackButton onPress={handleGoBack} />

              <Steps>
                <Bullet active />
                <Bullet />
              </Steps>
            </Header>

            <Title>Crie sua{"\n"}conta</Title>
            <SubTitle>Faça seu cadastro de{"\n"}forma rápida e fácil.</SubTitle>

            <Form>
              <FormTitle>01. Dados</FormTitle>

              <Input
                iconName="user"
                placeholder="Nome"
                value={name}
                onChangeText={setName}
              />
              <Input
                iconName="mail"
                placeholder="Email"
                keyboardType={"email-address"}
                autoCorrect={false}
                autoCapitalize={"none"}
                value={email}
                onChangeText={setEmail}
              />

              <Input
                iconName="credit-card"
                placeholder="CPF"
                keyboardType={"numeric"}
                value={cpfUser}
                onChangeText={setCpfUser}
              />
            </Form>
            <Button title="Próximo" onPress={handleNextStep} />
          </ScrollView>
        </Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
