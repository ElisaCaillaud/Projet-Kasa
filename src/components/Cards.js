import data from "../datas/logements.json";
import "../styles/Card.scss";
import { Link } from "react-router-dom";

function Logements() {
  return (
    <div className="liste-logements">
      <ul>
        {data.map((logement) => (
          <li
            key={logement.id}
            style={{ backgroundImage: `url(${logement.cover})` }}
          >
            <Link to={`${logement.id}`}>
              <h3>{logement.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Logements;
