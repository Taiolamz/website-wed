import React, { useEffect } from "react";
import "../styles/appreciation.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Appreciation = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="appreciation-wrap">
      <div
        className="appreciate-box"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <p>
          Thank you from the depths of our hearts for being a part of our
          special day!
        </p>
        <p>
          For more details and heartfelt conversations, please reach out to us
          at 0815-182-6298 or 0701-162-6492. We're eagerly waiting to hear from
          you!
        </p>
        <p>Accept all our love and gratitude ❤️❤️</p>
      </div>
    </div>
  );
};

export default Appreciation;
