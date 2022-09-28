import React, { useEffect, useState } from "react";
import Lottie from "lottie-react-native";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Card,
  CardTitle,
  Content,
  Title,
  Informations,
  Status,
} from "./styles";

import heartbeat from "../../assets/heartbeat.json";
import bloodPressure from "../../assets/bloodPressure.json";
import { HeaderStack } from "../../components/HeaderStack";
import api from "../../services/api";
import { Loading } from "../../components/Loading";

interface IDataProps {
  id: string;
  fallen: string;
  heartRate: string;
  oxigenLevel: string;
}

export function DetailsSeniors() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [sensorData, setSensorData] = useState<IDataProps[]>([]);

  function handleGoBack() {
    navigation.goBack();
  }

  async function loadData() {
    try {
      setLoading(true);
      await api.get("/teste/data").then((response) => {
        const data = response.data;
        const last = data[data.length - 1];
        setSensorData([last]);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {loading == true ? (
        <Loading />
      ) : (
        <Container>
          <HeaderStack title={"Detalhes"} />

          <Card>
            <CardTitle>Emanuel Silva</CardTitle>
          </Card>

          {sensorData.map((sensorData) => {
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
          })}
        </Container>
      )}
    </>
  );
}
