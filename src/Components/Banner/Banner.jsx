import banner1 from "/1.png";
import banner2 from "/2.png";
import banner3 from "/3.png";
import { Carousel } from "antd";
import "./banner.css";
const Banner = () => (
  <Carousel id="banner" autoplay>
    <img src={banner1} />
    <img src={banner2} />
    <img src={banner3} />
  </Carousel>
);
export default Banner;
