import React from "react";
import ImageOne from "../assets/image-one.jpg";
import ImageTwo from "../assets/image-two.jpg";
import ImageThree from "../assets/image-three.jpg";
import ImageFour from "../assets/image-four.jpg";
import ImageFive from "../assets/image-five.jpg";
import ImageSix from "../assets/image-six.jpg";
import ImageSeven from "../assets/image-seven.jpeg";
import ImageTen from "../assets/image-ten.jpeg";
import "../styles/image.css";
import Marquee from "react-fast-marquee";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Photo = () => {
  return (
    <div className="photo-wrap">
      <div className="overlay"></div>
      <div className="display-bg">
        <div className="text-wrap">
          <p> Our L🫶🏽ved up photos</p>
        </div>

        <div className="image-wrap-grid">
          <LazyLoadImage effect="blur" src={ImageFour} alt="image" />
          <LazyLoadImage effect="blur" src={ImageSix} alt="image" />
          <LazyLoadImage effect="blur" src={ImageThree} alt="image" />
          <LazyLoadImage effect="blur" src={ImageTwo} alt="image" />
          <LazyLoadImage effect="blur" src={ImageOne} alt="image" />
          <LazyLoadImage effect="blur" src={ImageSeven} alt="image" />
          <LazyLoadImage effect="blur" src={ImageThree} alt="image" />

          <LazyLoadImage effect="blur" src={ImageTwo} alt="image" />
          <LazyLoadImage effect="blur" src={ImageOne} alt="image" />
          <LazyLoadImage effect="blur" src={ImageFive} alt="image" />
          <LazyLoadImage effect="blur" src={ImageFour} alt="image" />
          <LazyLoadImage effect="blur" src={ImageTen} alt="image" />
        </div>

        <Marquee>
          <div className="image-wrap">
            <LazyLoadImage effect="blur" src={ImageOne} alt="image" />
            <LazyLoadImage effect="blur" src={ImageSeven} alt="image" />
            <LazyLoadImage effect="blur" src={ImageThree} alt="image" />
            <LazyLoadImage effect="blur" src={ImageSix} alt="image" />
            <LazyLoadImage effect="blur" src={ImageTwo} alt="image" />
            <LazyLoadImage effect="blur" src={ImageFour} alt="image" />
            <LazyLoadImage effect="blur" src={ImageTen} alt="image" />
            <LazyLoadImage effect="blur" src={ImageTwo} alt="image" />
            <LazyLoadImage effect="blur" src={ImageFive} alt="image" />
            <LazyLoadImage effect="blur" src={ImageThree} alt="image" />
            <LazyLoadImage effect="blur" src={ImageOne} alt="image" />
            <LazyLoadImage effect="blur" src={ImageFour} alt="image" />
            <br />
          </div>
        </Marquee>
      </div>
      <p
        className="view-text"
        onClick={() => {
          window.open(
            "https://ajaoolawalephotography.pixieset.com/thepre-wedding/",
            "_blank"
          );
        }}
      >
        See more of our photos
      </p>
    </div>
  );
};

export default Photo;
