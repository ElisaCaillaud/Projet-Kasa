import data from "../datas/logements.json";

function Logements() {
  return (
    <ul>
      {data.map((logement) => (
        <ul>
          <li>{logement.title}</li>
          <li>{logement.description}</li>
          <li>Hote: {logement.host.name}</li>
          <li>
            <img src={logement.cover} alt={logement.title} />
          </li>
        </ul>
      ))}
    </ul>
  );
}

export default Logements;
