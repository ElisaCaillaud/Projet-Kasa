import logoF from "../../assets/logo-footer.png";
import "../../styles/footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <a href="/">
          <img src={logoF} alt="logo Kasa" className="img-logo-footer" />
        </a>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
