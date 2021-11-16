import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../logo.png";
import "./ExpNavbar.css"

const ExpNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="No" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="#vehiculos">Vehiculos</Nav.Link>
            <Nav.Link href="#electro">Electronica</Nav.Link>
            <Nav.Link href="#libros">Libros</Nav.Link>
          </Nav>
          <Nav className="login-nav">
            <Nav.Link className="radius-action" href="#login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ExpNavbar;
