import { useState } from "react";
import fleche from "../../assets/fleche.png";

function CollapseAbout({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const ouvrirComposant = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <div className="derouleur">
        <h2>{title}</h2>
        <img
          src={fleche}
          alt={isOpen ? "Fermer" : "Ouvrir"}
          onClick={ouvrirComposant}
          className={isOpen ? "rotateBottom" : "rotateTop"}
        />
      </div>
      <div className={isOpen ? "openDerouleur" : "closedDerouleur"}>
        {isOpen && <p>{content}</p>}
      </div>
    </li>
  );
}

export default CollapseAbout;
