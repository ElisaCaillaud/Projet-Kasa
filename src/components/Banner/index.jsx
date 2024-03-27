import "../../styles/Banner.scss";
import banner from "../../assets/banner-img.png";

function Banner() {
  return (
    <div>
      <img src={banner} alt="bannière plage Kasa" className="img-banner" />
    </div>
  );
}

export default Banner;
