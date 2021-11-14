import "./NavBar.css";
import logo from "../logo.png"
const NavBar = () => {
  return (
    <nav class="menu-top">
      <div className="logo-container">
        <img src={logo} alt="Vale por una imagen" />
      </div>
      <ul className="menu-nav">
        <li>
          <a href="#"> Inicio </a>
        </li>
      </ul>
      <ul className="menu-list">
        <li>
          <a href="#">Vehiculos</a>
        </li>
        <li>
          <a href="#">Electronica</a>
        </li>
        <li>
          <a href="#">Libros</a>
        </li>
      </ul>
      <ul className="menu-login">
        <li>
          <a href="#"> Login </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
