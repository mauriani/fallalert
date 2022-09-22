import { StatusBar, View } from "react-native";
import { HeaderContainer, Logo } from "./styles";

import LogoImg from "../../assets/logo_azul.svg";

export function Header() {
  return (
    <HeaderContainer>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <View
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <LogoImg width="150" height="150" />
      </View>
    </HeaderContainer>
  );
}
