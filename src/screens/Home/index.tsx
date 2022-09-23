import { Header } from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  CardHome,
  Details,
  Name,
  Description,
  CardImage,
} from "./styles";

export function Home() {
  const navigation = useNavigation();
  function handleNavigateToDetailsSenior() {
    navigation.navigate("DetailsSeniors");
  }
  return (
    <Container>
      <Header />

      <CardHome onPress={() => handleNavigateToDetailsSenior()}>
        <Details>
          <Description>Nome</Description>
          <Name>Emanuel Silva</Name>

          <Description>Grau de parentesco</Description>
          <Name>Pai</Name>
        </Details>

        <CardImage
          source={{
            uri: "https://classic.exame.com/wp-content/uploads/2016/09/size_960_16_9_quem-sao-e-como-vivem-os-idosos-do-brasil1.jpg?quality=70&strip=info&w=960",
          }}
          resizeMode="contain"
        />
      </CardHome>

      <CardHome onPress={() => handleNavigateToDetailsSenior()}>
        <Details>
          <Description>Nome</Description>
          <Name>Glória Maria</Name>

          <Description>Grau de parentesco</Description>
          <Name>Mãe</Name>
        </Details>

        <CardImage
          source={{
            uri: "https://static1.conquistesuavida.com.br/articles//8/11/18/8/@/29710-vegetais-como-alface-espinafre-e-outras-article_block_media-2.jpg",
          }}
          resizeMode="contain"
        />
      </CardHome>
    </Container>
  );
}
