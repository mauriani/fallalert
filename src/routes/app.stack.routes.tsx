import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "../screens/SignIn";
import { Profile } from "../screens/Profile";
import { DetailsSeniors } from "../screens/DetailsSeniors";
import { AddDependency } from "../screens/AddDependency";

import { SignUpFirstStep } from "../screens/SignUp/SignUpFirstStep";
import { SignUpSecondStep } from "../screens/SignUp/SignUpSecondStep";

import { AppTabRoutes } from "./app.tab.routes";

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  SignIn: undefined;
  SignUp: undefined;
  DetailsSeniors: { name: string; id: string; userId: string };
  AddDependency: undefined;
  SignUpFirstStep: {
    user: { name: string; email: string; cpfUser: string };
  };
  SignUpSecondStep: {
    user: { name: string; email: string; cpfUser: string };
  };
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function AppStackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SignIn"
    >
      <Screen name="Home" component={AppTabRoutes} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Profile" component={Profile} />
      <Screen name="DetailsSeniors" component={DetailsSeniors} />
      <Screen name="AddDependency" component={AddDependency} />

      <Screen name="SignUpFirstStep" component={SignUpFirstStep} />
      <Screen name="SignUpSecondStep" component={SignUpSecondStep} />
    </Navigator>
  );
}
