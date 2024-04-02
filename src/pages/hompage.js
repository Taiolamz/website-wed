import React, { useEffect } from "react";
import "../styles/homepage.css";
import RingImage from "../assets/wedding-ring.png";
import CakeImage from "../assets/wedding-cake.png";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="homepage-wrap">
      <div data-aos="fade-down" data-aos-duration="1000">
        <div className="image-block">
          <img className="img" src={RingImage} alt="ring image" />
          <img className="cake-img" src={CakeImage} alt="cake image" />
        </div>
        <div className="header-block">
          <p className="head-text">Oloruntoba & Folayemi</p>
          <p className="married-text">are getting married</p>
        </div>

        <div className="address-block">
          <p>10-10-2024 ​ </p>
          <p>United States of America, Off Dalemo, Alakuko</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
