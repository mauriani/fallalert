import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Lottie from "lottie-react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import {
  Container,
  Card,
  CardTitle,
  Content,
  Title,
  Informations,
  Status,
} from "./styles";

import axios from "axios";

import { HeaderStack } from "../../components/HeaderStack";
import { Loading } from "../../components/Loading";

import heartbeat from "../../assets/heartbeat.json";
import bloodPressure from "../../assets/bloodPressure.json";

interface IDataProps {
  id: string;
  fallen: string;
  heartRate: string;
  oxigenLevel: string;
}

interface routeParams {
  name: string;
  id: string;
  userId: string;
}

export function DetailsSeniors() {
  const routes = useRoute();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [sensorData, setSensorData] = useState<IDataProps[]>([]);

  const { name } = routes.params as routeParams;

  async function loadData() {
    try {
      setLoading(true);

      await axios
        .get(
          "https://40wvqszc8k.execute-api.us-east-1.amazonaws.com/teste/data"
        )
        .then((response) => {
          const data = response.data;

          const newData = data.sort((a, b) => {
            return +new Date(b.date) - +new Date(a.date);
          });

          const values = newData.slice(0, 1);

          const fall = values.map((value) => {
            return value.fallen;
          });

          setSensorData(values);

          if (fall == 1) navigation.navigate("Alert");
        });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      loadData();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {loading == true ? (
        <Loading />
      ) : (
        <Container>
          <HeaderStack title={"Detalhes"} />
          <Card>
            <CardTitle>{name}</CardTitle>
          </Card>
          {sensorData.length > 0 ? (
            sensorData.map((sensorData) => {
              return (
                <Content key={sensorData.id}>
                  <Title>Frequência Cardíaca</Title>
                  <Informations>
                    <Lottie
                      source={heartbeat}
                      autoPlay
                      style={{ height: 150 }}
                      resizeMode="contain"
                      loop={true}
                    />

                    <Status>{sensorData.heartRate} bpm</Status>
                  </Informations>

                  <Title>Nivel de oxigênio</Title>
                  <Informations>
                    <Lottie
                      source={bloodPressure}
                      autoPlay
                      style={{ height: 150 }}
                      resizeMode="contain"
                      loop={true}
                    />

                    <Status>{sensorData.oxigenLevel}</Status>
                  </Informations>
                </Content>
              );
            })
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Title>
                Você não tem nenhum dado{"\n"} cadastrado no momento !
              </Title>
            </View>
          )}

          {/* <Button
            title="ALERTA"
            light={false}
            background={theme.colors.main}
            onPress={() => Vibration.vibrate(30 * ONE_SECOND_IN_MS)}
          /> */}
        </Container>
      )}
    </>
  );
}
