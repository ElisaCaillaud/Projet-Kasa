import { Link, useLocation } from "react-router-dom";
import "../../styles/header.scss";
import logo from "../../assets/logo.png";

function Header() {
  const location = useLocation();

  return (
    <div className="nav-full">
      <a href="/">
        <img src={logo} alt="logo Kasa" className="img-logo" />
      </a>
      <nav className="nav-menu">
        <Link
          to="/"
          className={
            location.pathname === "/" ? "nav-link underline" : "nav-link"
          }
        >
          Accueil
        </Link>
        <Link
          to="/a-propos"
          className={
            location.pathname === "/a-propos"
              ? "nav-link underline"
              : "nav-link"
          }
        >
          A Propos
        </Link>
      </nav>
    </div>
  );
}

export default Header;
