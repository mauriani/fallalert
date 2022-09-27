import { BackButton } from "../BackButton";

import { useNavigation } from "@react-navigation/native";

import {
  HeaderContainer,
  ContainerBack,
  HeaderCenter,
  HeaderTitle,
} from "./styles";
import theme from "../../styles/theme";

interface props {
  title: string;
}
export function HeaderStack({ title }: props) {
  const navigation = useNavigation();

  function handleNavigateGoBack() {
    navigation.goBack();
  }
  return (
    <HeaderContainer>
      <ContainerBack>
        <BackButton onPress={handleNavigateGoBack} color={theme.colors.shape} />
      </ContainerBack>
      <HeaderCenter>
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderCenter>
    </HeaderContainer>
  );
}
