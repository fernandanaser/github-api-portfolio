import Menu from "./Menu/Menu";
import { HeaderContainer, Container } from "./styles";

const Header = () =>{
  return (
    <HeaderContainer>
        <Container>
            <div>
                Logo
            </div>
            <Menu />
        </Container>
    </HeaderContainer>
  )
}

export default Header;