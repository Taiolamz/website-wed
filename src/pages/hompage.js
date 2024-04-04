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
      <div
        className="image-block"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <p className="head-text">Oloruntoba & Folayemi</p>
        <p className="married-text">are getting married</p>
        {/* <div className="address-block"> */}
        <p className="sub-txt">05-11-2024 ​ </p>
        <p className="sub-txt">#Ease24</p>
      </div>
      {/* </div> */}

      <img className="img" src={RingImage} alt="ring image" />
    </div>
  );
};

export default HomePage;
