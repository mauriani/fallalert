import { useEffect } from "react";
import { Platform, StatusBar, Vibration } from "react-native";
import { useTheme } from "styled-components";
import Lottie from "lottie-react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import attention from "../../assets/attention.json";
import { Button } from "../../components/Button";

import { Container, Title, SubTitle } from "./styles";

export function Alert() {
  const theme = useTheme();
  const navigation = useNavigation();

  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS,
  ];

  const PATTERN_DESC =
    Platform.OS === "android"
      ? "wait 1s, vibrate 2s, wait 3s"
      : "wait 1s, vibrate, wait 2s, vibrate, wait 3s";

  function handleInitialVibration() {
    Vibration.vibrate(30 * ONE_SECOND_IN_MS);
  }

  function handleVibrationCancel() {
    Vibration.cancel();

    navigation.navigate("Home");
  }

  useEffect(() => {
    handleInitialVibration();
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Title>ATENÇÃO !!!</Title>

      <SubTitle>Queda dectectada !</SubTitle>

      <Lottie
        source={attention}
        autoPlay
        style={{ height: 350 }}
        resizeMode="contain"
        loop={true}
      />

      <Button
        title="OK"
        background={theme.colors.main}
        onPress={handleVibrationCancel}
      />
    </Container>
  );
}
