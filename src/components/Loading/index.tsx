import { View, ActivityIndicator } from "react-native";
import Lottie from "lottie-react-native";
import { useTheme } from "styled-components";
import { Container } from "./styles";

import loadingAnimation from "../../assets/loading.json";

export function Loading() {
  const theme = useTheme();

  return (
    <Container>
      <Lottie
        source={loadingAnimation}
        autoPlay
        style={{ height: 200 }}
        resizeMode="contain"
        loop={true}
      />
    </Container>
  );
}
