import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Summer from "../assets/img/grass.jpeg";
import Fall from "../assets/img/leaves.jpeg";
import Winter from "../assets/img/snow.jpeg";
import Spring from "../assets/img/spring.jpeg";
import '../App.css'

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="carousel-container">
        <Carousel className="carousel-img" interval={10000} infiniteLoop autoPlay>
          <div>
            <img src={Summer} alt="Summer Grass" />
          </div>
          <div>
            <img src={Fall} alt="Fall Leaves" />
          </div>
          <div>
            <img src={Winter} alt="Winter Snow" />
          </div>
          <div>
            <img src={Spring} alt="Spring Time" />
          </div>
        </Carousel>
        <div className="text-container">
          <h1>Services</h1>
          <h2>
            We offer a complete range of
            <br /> property services including:
          </h2>
          <ul>
            <li>Snow Removal and Hauling</li>
            <li>Sidewalk Snow Removal With Specialized Equipmen</li>
            <li>De-icing</li>
            <li>Weekly Mowing</li>
            <li>Weed and Pest Control</li>
            <li>Landscape Installation</li>
            <li>Pruning</li>
            <li>Aeration</li>
          </ul>
          <ul>
            <li>Sod and Seed</li>
            <li>Holiday Lighting and Decorations</li>
            <li>Graffiti Abatement</li>
            <li>Tree Planting</li>
            <li>Annual and Perennial Planting</li>
            <li>Lot Sweeping</li>
            <li>Organic Gardens</li>
            <li>Garden Planting and Maintenance</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
