import React from "react";
import { TouchableOpacityProps } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useTheme } from "styled-components";

import { Container } from "./styles";

interface Props extends TouchableOpacityProps {
  color?: string;
  onPress: () => void;
}

export function BackButton({ onPress, color, ...rest }: Props) {
  const theme = useTheme();
  return (
    <Container {...rest} onPress={onPress}>
      <MaterialCommunityIcons
        name="chevron-left"
        size={28}
        color={color ? color : theme.colors.text}
      />
    </Container>
  );
}
