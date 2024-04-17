import etoileGrise from "../../assets/etoile-grise.png";
import etoileRouge from "../../assets/etoile-rouge.png";
import data from "../../datas/logements.json";
import { useParams } from "react-router-dom";
import "../../styles/scale.scss";

function Scale() {
  const stars = [1, 2, 3, 4, 5];
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);
  const rating = logement.rating;

  return (
    <div className="star-container">
      {stars.map((star, index) => (
        <span key={index}>
          {star <= rating ? (
            <img src={etoileRouge} alt="etoile rouge" />
          ) : (
            <img src={etoileGrise} alt="etoile grise" />
          )}
        </span>
      ))}
    </div>
  );
}

export default Scale;
