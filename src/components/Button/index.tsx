import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, Title } from "./styles";

export function Button({
  light = false,
  background,
  onPress,
  title,
  enabled = true,
  loading = false,
  ...rest
}) {
  const theme = useTheme();
  return (
    <Container
      {...rest}
      enabled={enabled}
      loading={loading}
      onPress={onPress}
      style={
        light != true
          ? { backgroundColor: background }
          : {
              backgroundColor: theme.colors.background_primary,
              borderColor: background,
              borderWidth: 2,
            }
      }
    >
      {loading ? (
        <ActivityIndicator
          color={light != true ? theme.colors.shape : theme.colors.title}
        />
      ) : (
        <Title
          style={
            light != true
              ? { color: theme.colors.shape }
              : { color: background }
          }
        >
          {title}
        </Title>
      )}
    </Container>
  );
}
