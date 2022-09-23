import { StatusBar, View } from "react-native";
import { HeaderContainer, HeaderTitle } from "./styles";

import LogoImg from "../../assets/logo_azul.svg";

export function Header() {
  return (
    <HeaderContainer>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <HeaderTitle>Fall alert</HeaderTitle>
    </HeaderContainer>
  );
}
