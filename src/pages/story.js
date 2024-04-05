import React, { useEffect } from "react";
import "../styles/story.css";
import Carousel from "react-bootstrap/Carousel";
import AOS from "aos";
import "aos/dist/aos.css";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

const Story = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="story-wrap">
      <div className="story-block">
        <p className="quote-text">
          I vow to fiercely love you in all your forms, now and forever. I
          promise to never forget that this is a once-in-a-lifetime love.
        </p>
      </div>
    </div>
  );
};

export default Story;
