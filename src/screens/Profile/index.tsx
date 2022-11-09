import React, { useState, Fragment } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ScrollView,
} from "react-native";
import { useTheme } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { useNavigation, StackActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useAuth } from "../../context/auth";
import { Input } from "../../components/Form/Input";
import { PasswordInput } from "../../components/Form/PasswordInput";

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
  Section,
} from "./styles";
import { Loading } from "../../components/Loading";

export function Profile() {
  const { user } = useAuth();
  const theme = useTheme();
  const navigation = useNavigation();
  const [loading, setLoading] = useState();

  const [option, setOption] = useState<"dataEdit" | "passwordEdit">("dataEdit");

  const [name, setName] = useState(user.name);
  const [cpf, setCpf] = useState(user.cpf);
  const [email, setEmail] = useState(user.email);

  function handleOptionChange(optionSelected: "dataEdit" | "passwordEdit") {
    setOption(optionSelected);
  }

  function handleLogout() {
    Alert.alert(
      "Sair",
      "Você realmente deseja sair do Fall Alert ?",
      [
        {
          text: "Sair",
          onPress: () => submitLogout(),
        },
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
  }

  async function submitLogout() {
    await AsyncStorage.removeItem("@fallalert:user");
    const popAction = StackActions.pop(1);
    navigation.dispatch(popAction);
  }

  return (
    <Fragment>
      {loading == true ? (
        <Loading />
      ) : (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0}
          >
            <Container>
              <ScrollView>
                <Header>
                  <HeaderTop>
                    <HeaderTitle>Editar Perfil</HeaderTitle>
                    <LogoutButton onPress={handleLogout}>
                      <Feather
                        name="power"
                        size={24}
                        color={theme.colors.shape}
                      />
                    </LogoutButton>
                  </HeaderTop>

                  <PhotoContainer>
                    <Photo
                      source={{
                        uri: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                      }}
                    />

                    <PhotoButton onPress={() => {}}>
                      <Feather
                        name="camera"
                        size={24}
                        color={theme.colors.shape}
                      />
                    </PhotoButton>
                  </PhotoContainer>
                </Header>

                <Content>
                  <Options>
                    <Option
                      active={option === "dataEdit"}
                      onPress={() => handleOptionChange("dataEdit")}
                    >
                      <OptionTitle active={option === "dataEdit"}>
                        Dados
                      </OptionTitle>
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

                  {option === "dataEdit" ? (
                    <Section>
                      <Input
                        iconName="user"
                        placeholder="Nome"
                        autoCorrect={false}
                        defaultValue={user.name}
                        editable={true}
                        onChangeText={setName}
                        value={name}
                      />

                      <Input
                        iconName="mail"
                        editable={false}
                        defaultValue={user.email}
                        value={email}
                        onChangeText={setEmail}
                      />

                      <Input
                        iconName="credit-card"
                        placeholder="CPF"
                        keyboardType={"numeric"}
                        defaultValue={user.cpf}
                        editable={false}
                        value={cpf}
                        onChangeText={setCpf}
                      />
                    </Section>
                  ) : (
                    <Section>
                      <PasswordInput
                        iconName="lock"
                        placeholder="Senha atual"
                      />
                      <PasswordInput iconName="lock" placeholder="Nova senha" />
                      <PasswordInput
                        iconName="lock"
                        placeholder="Confirma senha"
                      />
                    </Section>
                  )}
                </Content>
              </ScrollView>
            </Container>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      )}
    </Fragment>
  );
}
