import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from "react-router-dom";



const NavMenu = ({logo}) =>{
    return(
    
    <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" style={{textDecoration:"none"}}><Navbar.Brand style={{fontSize:"40px",marginRight:"100px"}}>{logo.toLocaleUpperCase()}</Navbar.Brand></Link> 
          <Nav className="me-auto">
            <NavLink to="/categoria/Tecnologia" className="a">Tecnologia</NavLink>
            <NavLink to="/categoria/Deportes" className="a">Deportes</NavLink>
            <NavLink to="/categoria/Automotores" className="a">Autos</NavLink>
            <NavLink to="/categoria/Juguetes" className="a">Juguetes</NavLink>
            <NavLink to="/categoria/Hogar" className="a">Hogar</NavLink>          
          </Nav>
          <Link to="/cart" style={{textDecoration:"none"}}><CartWidget/></Link>
          
        </Container>
    </Navbar>

    )

}
export default NavMenu
  