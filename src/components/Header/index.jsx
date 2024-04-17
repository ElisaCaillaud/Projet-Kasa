import { Link } from "react-router-dom";
import "../../styles/header.scss";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <div className="nav-full">
      <a href="/">
        <img src={logo} alt="logo Kasa" className="img-logo" />
      </a>
      <nav className="nav-menu">
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">A propos</Link>
      </nav>
    </div>
  );
}

export default Header;
