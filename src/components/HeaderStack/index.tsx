import { HeaderContainer, HeaderTitle } from "./styles";

interface props {
  title: string;
}
export function HeaderStack({ title }: props) {
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
}
