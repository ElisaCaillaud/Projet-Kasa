import data from "../../datas/logements.json";
import "../../styles/collapse.scss";
import CollapseAbout from "../CollapseAbout";
import { useParams } from "react-router-dom";
import "../../styles/logement.scss";
import Scale from "../../components/Scale";
import { Navigate } from "react-router-dom";

function LogementsDetails() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  if (id == null || logement == null) {
    return <Navigate to="*" />;
  }

  return (
    <div>
      <div className="info-container">
        <div className="name-location">
          <h1>{logement.title}</h1>
          <h3>{logement.location}</h3>
          <div className="tags-list">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="host">
          <div className="host-item">
            <p className="host-name">{logement.host.name}</p>
            <img
              src={logement.host.picture}
              className="img-host"
              alt={logement.host.name}
            />
          </div>
          <Scale className="scale" />
        </div>
      </div>
      <div className="container-liste-logement">
        <CollapseAbout title="Description" content={logement.description} />
        <CollapseAbout
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default LogementsDetails;
