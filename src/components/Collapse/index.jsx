import "../../styles/collapse.scss";
import { aboutList } from "../../datas/aboutList";
import CollapseAbout from "../CollapseAbout";

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
