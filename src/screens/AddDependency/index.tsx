import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import * as Yup from "yup";
import { cpf } from "cpf-cnpj-validator";
import Axios from "axios";

import { useAuth } from "../../context/auth";
import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";
import api from "../../services/api";

import profileAvatar from "../../assets/bighead.png";
import {
  Container,
  ContentPhoto,
  PhotoContainer,
  Photo,
  PhotoButton,
  Content,
  Form,
  Title,
  MaskInput,
} from "./styles";
import { HeaderStack } from "../../components/HeaderStack";

export function AddDependency() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { user } = useAuth();

  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [degree, setDegree] = useState("");
  const [cpfDep, setCpfDep] = useState("");
  const [phone, setPhone] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [road, setRoad] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [age, setAge] = useState("");

  async function validateFields() {
    try {
      setLoading(true);

      const schema = Yup.object().shape({
        number: Yup.string().required("O número da residência é obrigatório"),
        address: Yup.string().required("O bairro é obrigatório"),
        road: Yup.string().required("A rua é obrigatório"),
        zipCode: Yup.string().required("O CEP é obrigatório"),
        phone: Yup.string().required("O campo de telefone é obrigatório"),
        cpfDep: Yup.string()
          .required()
          .test("test-invalid-cpf", "cpf inválido", (value) =>
            cpfIsInvalid(value)
          ),
        degree: Yup.string().required("O grau de parentesco é obrigatório"),
        name: Yup.string().required("O campo nome é obrigatório"),
      });

      const data = {
        name,
        degree,
        cpfDep,
        phone,
        zipCode,
        road,
        address,
        number,
      };

      await schema.validate(data);

      createNewDependent();
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        return Alert.alert("Atenção", error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  async function createNewDependent() {
    try {
      setLoading(true);

      await api
        .post(`${user.id}/dependents`, {
          name,
          age: parseInt(age),
          photo: `https://avatars.dicebear.com/api/personas/${user.name}%20doe.png`,
          degree,
          phone,
          zipCode,
          address,
          road,
          cpf: cpfDep,
          number: parseInt(number),
        })
        .then((response) => {
          const { message } = response.data;

          Alert.alert("Sucesso", message);
          navigation.navigate("Home");
        });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  async function getZipCode() {
    if (zipCode.toString().length >= 9) {
      await Axios.get(`https://viacep.com.br/ws/${zipCode}/json/`)
        .then((response) => {
          if (response.data.error) {
            Alert.alert("O cep informado é inválido");
            return;
          }
          const { bairro, logradouro } = response.data;

          setAddress(bairro);
          setRoad(logradouro);
        })
        .catch((error) => {
          console.log(error);
          Alert.alert(error);
        });
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

  useEffect(() => {
    if (zipCode) {
      getZipCode();
    }
  }, [zipCode]);

  return (
    <Container>
      <HeaderStack title={"Adicionar Dependente"} />

      {/* <ContentPhoto>
        <PhotoContainer>
          <Photo source={{ uri: image }} />

          <PhotoButton onPress={pickImage}>
            <Feather name="camera" size={24} color={theme.colors.shape} />
          </PhotoButton>
        </PhotoContainer>
      </ContentPhoto> */}

      <Content>
        <Form>
          <Input
            iconName="user"
            placeholder="Nome"
            value={name}
            onChangeText={setName}
          />
          <Input
            iconName="user"
            placeholder="Grau de parentesco"
            value={degree}
            onChangeText={setDegree}
          />

          <Input
            iconName="user"
            placeholder="Idade"
            keyboardType={"numeric"}
            value={age}
            onChangeText={setAge}
          />

          <MaskInput
            type={"cpf"}
            placeholder={"CPF"}
            value={cpfDep}
            onChangeText={(text) => setCpfDep(text)}
          />

          <MaskInput
            type={"cel-phone"}
            placeholder="Celular"
            options={{
              maskType: "BRL",
              withDDD: true,
              dddMask: "(99) ",
            }}
            value={phone}
            onChangeText={(text) => setPhone(text)}
          />

          <Title>Endereço</Title>

          <MaskInput
            type={"zip-code"}
            value={zipCode}
            placeholder="CEP"
            onChangeText={(text) => setZipCode(text)}
          />
          <Input
            iconName="home"
            placeholder="Rua"
            value={road}
            onChangeText={setRoad}
          />
          <Input
            iconName="home"
            placeholder="Bairro"
            value={address}
            onChangeText={setAddress}
          />
          <Input
            iconName="home"
            placeholder="Número"
            value={number}
            onChangeText={setNumber}
          />
        </Form>

        <Button title="Adicionar" onPress={validateFields} />
      </Content>
    </Container>
  );
}
