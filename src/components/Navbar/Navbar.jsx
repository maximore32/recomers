import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const NavMenu = ({logo}) =>{
    return(
    
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand style={{fontSize:"40px",marginRight:"100px"}} href="/">{logo.toLocaleUpperCase()}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Nosotros</Nav.Link>
            <Nav.Link href="#features">Productos</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
            <Nav.Link href="#pricing">Fotos</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
    </Navbar>

    )

}
export default NavMenu
  