import data from "../../datas/logements.json";
import { useParams } from "react-router-dom";
import { useState } from "react";
import flecheGauche from "../../assets/fleche-gauche.png";
import flecheDroite from "../../assets/fleche-droite.png";
import "../../styles/slideshow.scss";

function Slideshow() {
  const { id } = useParams();
  var photos = [];
  var description = "";
  const loge = data.find((item) => item.id === id);
  if (loge) {
    photos = loge.pictures;
    description = loge.description;
  }
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="slider"
      style={{ backgroundImage: `url(${photos[currentIndex]})` }}
    >
      <img src={flecheGauche} onClick={goToPrevSlide} />
      <p>
        {currentIndex + 1}/{photos.length}
      </p>
      <img src={flecheDroite} onClick={goToNextSlide} />
    </div>
  );
}

export default Slideshow;
