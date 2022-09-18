import { View, ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";
import { Container } from "./styles";

export function Loading() {
  const theme = useTheme();

  console.log(theme);

  return (
    <Container>
      <ActivityIndicator color={theme.colors.main} />
    </Container>
  );
}
