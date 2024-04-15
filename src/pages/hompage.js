import React, { useEffect } from "react";
import "../styles/homepage.css";
import RingImage from "../assets/wedding-ring.png";
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
        <div className="image-box">
          <p className="head-text">Folayemi & Oloruntoba </p>
          <p className="married-text">Are getting married</p>
          <p className="sub-txt">05-11-2024 ​ </p>
          <p className="sub-text"></p>
          <p className="sub-txt-ease">#Ease24</p>
        </div>
      </div>
      {/* </div> */}

      <img className="img" src={RingImage} alt="ring image" />
    </div>
  );
};

export default HomePage;
