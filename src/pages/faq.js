import React, { useEffect, useState } from "react";
import "../styles/faq.css";
import ImageOne from "../assets/image-one.jpg";
import ImageTwo from "../assets/image-two.jpg";

const Faq = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const offset = window.scrollY;
      if (offset > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={isSticky ? "about-wrap sticky" : "about-wrap"}
      id="about-wrap"
    >
      {/* left side start */}
      <div className="about-box">
        <div className="left-wrap">
          <div className="left-box">
            <img src={ImageOne} alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem voluptas perspiciatis saepe alias dicta repudiandae
              fugit sint necessitatibus! Dolorum odit ducimus ad aperiam quam
              quae asperiores rerum qui nihil id. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Neque ea eius asperiores ratione
              dolorem eligendi ullam porro laboriosam fuga cumque? Vel maxime
              repudiandae aut ratione blanditiis et porro nisi nam.
            </p>
          </div>
          <div className="left-box down-box">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem voluptas perspiciatis saepe alias dicta repudiandae
              fugit sint necessitatibus! Dolorum odit ducimus ad aperiam quam
              quae asperiores rerum qui nihil id. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Error velit id consequatur
              asperiores quis reiciendis dolores sapiente magni possimus, ab
              earum quod, nobis distinctio? Ex nemo deserunt velit quam sequi!
            </p>
            <img src={ImageTwo} alt="" />
          </div>
        </div>
      </div>
      {/* left side end */}
    </div>
  );
};

export default Faq;
