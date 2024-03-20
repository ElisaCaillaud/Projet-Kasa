import { Link } from "react-router-dom";
import "../../styles/Header.scss";

function Header() {
  return (
    <nav className="nav-menu">
      <Link to="/">Accueil</Link>
      <Link to="/a-propos">A propos</Link>
    </nav>
  );
}

export default Header;
