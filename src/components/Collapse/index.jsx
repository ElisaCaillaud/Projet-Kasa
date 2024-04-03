import { useState } from "react";
import { useEffect } from "react";
import fleche from "../../assets/fleche.png";
import "../../styles/collapse.scss";
import { aboutList } from "../../datas/aboutList";

function CollapseAbout({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const ouvrirComposant = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setIsOpen((isOpen) => isOpen || false);
  }, []);

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
      {isOpen && (
        <div className="contenuDerouleur">
          <p>{content}</p>
        </div>
      )}
    </li>
  );
}

function Collapse() {
  return (
    <div className="container-liste">
      <ul>
        {aboutList.map((item) => (
          <CollapseAbout
            key={item.id}
            title={item.title}
            content={item.content}
          />
        ))}
      </ul>
    </div>
  );
}

export default Collapse;
