import data from "../datas/logements.json";
import "../styles/Card.scss";

function Logements() {
  return (
    <div className="liste-logements">
      <ul>
        {data.map((logement) => (
          <li
            key={logement.id}
            style={{ backgroundImage: `url(${logement.cover})` }}
          >
            <h3>{logement.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Logements;
