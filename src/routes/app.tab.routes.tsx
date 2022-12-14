import * as React from "react";
import { Platform } from "react-native";
import { useTheme } from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppStackRoutes } from "./app.stack.routes";

import HomeSvg from "../assets/home.svg";
import PeopleSvg from "../assets/people.svg";

import { Profile } from "../screens/Profile";
import { Home } from "../screens/Home";

export type RootStackParamList = {
  Dashboard: undefined;
  Profile: undefined;
  SignUpFirstStep: {
    user: { name: string; email: string; cpfUser: string };
  };
  SignUpSecondStep: {
    user: { name: string; email: string; cpfUser: string };
  };
};

const { Navigator, Screen } = createBottomTabNavigator<RootStackParamList>();

export function AppTabRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, // não aparece texto
        tabBarActiveTintColor: theme.colors.main,
        tabBarInactiveTintColor: theme.colors.text_detail,
        tabBarStyle: {
          height: 70,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          backgroundColor: theme.colors.background_primary,
        },
      }}
    >
      <Screen
        name="Dashboard"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg width={24} height={24} fill={color} />
          ),
        }}
      />

      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <PeopleSvg width={24} height={24} fill={color} />
          ),
        }}
      />
    </Navigator>
  );
}
