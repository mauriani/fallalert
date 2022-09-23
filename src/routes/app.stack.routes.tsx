import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";
import { Profile } from "../screens/Profile";

import { DetailsSeniors } from "../screens/DetailsSeniors";

import { AppTabRoutes } from "./app.tab.routes";

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  SignIn: undefined;
  SignUp: undefined;
  DetailsSeniors: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function AppStackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Screen name="Home" component={AppTabRoutes} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="Profile" component={Profile} />
      <Screen name="DetailsSeniors" component={DetailsSeniors} />
    </Navigator>
  );
}
