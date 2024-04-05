import React from "react";
import ImageOne from "../assets/image-one.jpg";
import "../styles/image.css";
import Marquee from "react-fast-marquee";

const Photo = () => {
  return (
    <div className="photo-wrap">
      <div className="text-wrap">
        <p>🫶🏽 Our Loved up pictures 🫶🏽</p>
      </div>
      <Marquee>
        <div className="image-wrap">
          <img src={ImageOne} alt="image" />
          <img src={ImageOne} alt="image" />
          <img src={ImageOne} alt="image" />
          <img src={ImageOne} alt="image" />
          <img src={ImageOne} alt="image" />
          <img src={ImageOne} alt="image" />
          <img src={ImageOne} alt="image" />
          <img src={ImageOne} alt="image" />
          <img src={ImageOne} alt="image" />
          <img src={ImageOne} alt="image" />
          <br />
        </div>
      </Marquee>
      <p
        className="view-text"
        onClick={() => {
          window.open(
            "https://ajaoolawalephotography.pixieset.com/thepre-wedding/",
            "_blank"
          );
        }}
      >
        Check out our loved up pictures
      </p>
    </div>
  );
};

export default Photo;
