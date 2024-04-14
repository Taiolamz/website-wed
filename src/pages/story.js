import React, { useEffect } from "react";
import "../styles/story.css";
import Carousel from "react-bootstrap/Carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import LoveVideo from "../assets/love-video.mp4";
// import { Player } from "video-react";
// import '~video-react/dist/video-react.css'; // import css
// import ExampleCarouselImage from "components/ExampleCarouselImage";

const Story = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="story-wrap">
      <video autoPlay muted loop className="video-background">
        <source src={LoveVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <div className="quote-wrap">
          <p data-aos="fade-down" data-aos-duration="1000" className="top-text">
            Two souls, one heart, bound by love's eternal art
          </p>
          <p className="quote-text" data-aos="fade-up" data-aos-duration="1000">
            This step in our journey marks the beginning of our forever, where
            two hearts beat as one, two souls intertwine in a dance of love, and
            every moment becomes a cherished memory of our journey together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;
