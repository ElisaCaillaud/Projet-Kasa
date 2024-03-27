import data from "../datas/logements.json";

function Logements() {
  return (
    <ul>
      {data.map((logement) => (
        <ul>
          <li>{logement.title}</li>
          <li>
            <img src={logement.cover} alt={logement.title} />
          </li>
        </ul>
      ))}
    </ul>
  );
}

export default Logements;
