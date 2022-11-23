import React, { useState, Fragment, useEffect } from "react";
import { Alert, View } from "react-native";
import { useTheme } from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather } from "@expo/vector-icons";
import api from "../../services/api";

import { Header } from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import { Loading } from "../../components/Loading";

import {
  Container,
  CardHome,
  Details,
  Name,
  Description,
  CardImage,
  FabButton,
  Title,
} from "./styles";

interface dependentsProps {
  id: string;
  name: string;
  age: number;
  photo: string;
  degree: string;
  phone: string;
  zipCode: string;
  address: string;
  road: string;
  cpf: string;
  number: number;
  userId: string;
}

export function Home() {
  const theme = useTheme();
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);
  const [dependents, setDependents] = useState<dependentsProps[]>([]);

  function handleNavigateToDetailsSenior(item: dependentsProps) {
    navigation.navigate("DetailsSeniors", {
      name: item.name,
      id: item.id,
      userId: item.userId,
    });
  }

  function handleNavigateToAddSenior() {
    navigation.navigate("AddDependency");
  }

  async function getForDependents() {
    try {
      setLoading(true);
      if (await AsyncStorage.getItem("@fallalert:user")) {
        const dataUser = JSON.parse(
          await AsyncStorage.getItem("@fallalert:user")
        );

        const { id } = dataUser;

        await api.get(`${id}/user/dependents`).then(async (response) => {
          setDependents(response.data.dependents);
        });
      }
    } catch (err) {
      console.log(err);
      Alert.alert("Opa", "Ocorreu um erro ao verificar credenciais");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getForDependents();
  }, [navigation]);

  return (
    <Fragment>
      {loading == true ? (
        <Loading />
      ) : (
        <Container>
          <Header />

          {Object.values(dependents).length > 0 ? (
            Object.values(dependents).map((item) => (
              <CardHome
                key={item.id}
                onPress={() => handleNavigateToDetailsSenior(item)}
              >
                <Details>
                  <Description>Nome</Description>
                  <Name>{item.name}</Name>

                  <Description>Grau de parentesco</Description>
                  <Name>{item.degree}</Name>
                </Details>

                <CardImage
                  source={{
                    uri: item.photo,
                  }}
                  resizeMode="contain"
                />
              </CardHome>
            ))
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Title>
                Você não tem nenhum dependente{"\n"} cadastrado no momento !
              </Title>
            </View>
          )}

          <FabButton activeOpacity={0.7} onPress={handleNavigateToAddSenior}>
            <Feather
              size={25}
              name="plus"
              color={theme.colors.background_secondary}
            />
          </FabButton>
        </Container>
      )}
    </Fragment>
  );
}
