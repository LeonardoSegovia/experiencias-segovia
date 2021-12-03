import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../../logo.png";
import "./ExpNavbar.css";
import CardWidget from "../CardWiget";

const ExpNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="No" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="/category/1">Categoria 1</Nav.Link>
            <Nav.Link href="/category/2">Categoria 2</Nav.Link>
            <Nav.Link href="/category/3">Categoria 3</Nav.Link>
          </Nav>
          <Nav className="login-nav">
            <Nav.Link className="radius-action" href="/">
              Login
            </Nav.Link>
            <Nav.Link href="/">
              <CardWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ExpNavbar;
