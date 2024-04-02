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
      <p className="header-text">SHE SAID YES!</p>
      <div className="bottom-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          dolores, veritatis, eaque autem excepturi consectetur in facilis eum
          quidem deserunt sunt? Blanditiis quas iure dolor inventore asperiores
          eum veniam ex.
        </p>
        <p>
          on 04.05.2022 we smile at each other and the rest is love
          story...Wahala for who no get love o
        </p>
        <p>We can't wait to celebrate this marriage with you!</p>
      </div>
      <div className="carousel" data-aos="fade-up" data-aos-duration="1000">
        <Carousel fade interval={5000}>
          <Carousel.Item>
            <img
              src="https://img.freepik.com/free-photo/romantic-black-couple-sitting-restaurant-wearing-elegant-clothes_1157-51941.jpg?t=st=1710697988~exp=1710701588~hmac=87a98faa018f621cfdc54e1027f808de748ed8c5120ce3edbec9016668e80444&w=2000"
              alt=""
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://img.freepik.com/free-photo/charming-joyful-caring-young-african-american-family-man-woman-siblings-smiling-broadly-show-heart-gestures-grinning-express-love-empathy-positivity-two-loyal-friends-cherish-friendship_1258-81676.jpg?t=st=1710698009~exp=1710701609~hmac=e3a14d8702e4ae126d0ad4189d1b93cc5f2cb6ba16ffe04f33657f3b20fde1b3&w=2000"
              alt=""
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://img.freepik.com/free-photo/couple-being-intimate-bed_53876-14611.jpg?t=st=1710698045~exp=1710701645~hmac=9296cb71b33a5b3a0830dbe460c191295b321b87b7c220bc8ebe24d49d4d0a2c&w=2000"
              alt=""
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Story;
