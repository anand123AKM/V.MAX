import "./App.css";
import ImageSlider from "./ImageSlider";
import flowerImg from "./image/vcall2.png";
import lighthouseImg from "./image/react1.png";
import dandelion from "./image/express-js.png";
import vp from "./image/vp.png";

function Slider() {
  const images = [flowerImg, vp, lighthouseImg, flowerImg, dandelion, vp];

  return (
    <div className="App">
      <div style={{ padding: "10px" }}>
        <ImageSlider images={images} />
      </div>
    </div>
  );
}

export default Slider;