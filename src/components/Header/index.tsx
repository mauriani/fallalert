import { HeaderContainer, HeaderTitle } from "./styles";
interface props {
  title: string;
}
export function Header({ title }: props) {
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
}
