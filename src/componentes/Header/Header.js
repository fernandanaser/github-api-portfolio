import { AboutContainer } from "componentes/About/styles";
import Menu from "./Menu/Menu";
import { HeaderContainer, Container } from "./styles";

const Header = () =>{
  return (
    <>
    <HeaderContainer>
        <Container>
            <div>
                Logo
            </div>
            <Menu />
        </Container>
    </HeaderContainer>
    <AboutContainer />
    </>
  )
}

export default Header;