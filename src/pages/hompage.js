import React, { useEffect, useRef, useState } from "react";
import "../styles/homepage.css";
import RingImage from "../assets/wedding-ring.png";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const elementRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);
  return (
    <div
      className={`homepage-wrap ${isIntersecting ? "lazy-homepage-wrap" : ""}`}
      ref={elementRef}
    >
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
