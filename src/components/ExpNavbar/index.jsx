import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../../logo.png";
import "./ExpNavbar.css";
import CardWidget from "../CardWiget";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const ExpNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link className="nav-link">
          <img src={logo} alt="No" />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Link className="nav-link" to="/">
              Inicio
            </Link>
          </Nav>
          <Nav className="me-auto">
            <Link class="nav-link" to="/category/1">
              Categoria 1
            </Link>
            <Link class="nav-link" to="/category/2">
              Categoria 2
            </Link>
            <Link class="nav-link" to="/category/3">
              Categoria 3
            </Link>
          </Nav>
          <Nav className="login-nav">
            <Nav.Link className="radius-action" href="/">
              Login
            </Nav.Link>
            <Link className="nav-link" to="/cart">
              <CardWidget />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ExpNavbar;
