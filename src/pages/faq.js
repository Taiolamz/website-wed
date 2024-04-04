import React from "react";
import "../styles/faq.css";
import ImageOne from "../assets/image-one.jpg";
import ImageTwo from "../assets/image-two.jpg";

const Faq = () => {
  return (
    <div className="about-wrap">
      {/* <p className="header-text">FAQ</p>
      <div className="bottom-ques">
        <div className="group">
          <p className="txt-head">Are children welcome?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eos
            itaque saepe cumque nam ipsam, inventore, consequatur, omnis vero
            voluptate eveniet ea tempore quibusdam maiores! Molestiae
            perspiciatis est excepturi ipsam!
          </p>
        </div>

        <div className="group">
          <p className="txt-head">Can i bring my ex?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eos
            itaque saepe cumque nam ipsam, inventore, consequatur, omnis vero
            voluptate eveniet ea tempore quibusdam maiores! Molestiae
            perspiciatis est excepturi ipsam!
          </p>
        </div>
        <div className="group">
          <p className="txt-head">Can i bring my ex?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eos
            itaque saepe cumque nam ipsam, inventore, consequatur, omnis vero
            voluptate eveniet ea tempore quibusdam maiores! Molestiae
            perspiciatis est excepturi ipsam!
          </p>
        </div>
        <div className="group">
          <p className="txt-head">Can i bring my ex?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eos
            itaque saepe cumque nam ipsam, inventore, consequatur, omnis vero
            voluptate eveniet ea tempore quibusdam maiores! Molestiae
            perspiciatis est excepturi ipsam!
          </p>
        </div>
      </div> */}

      {/* left side start */}
      <div className="left-wrap">
        <div className="left-box">
          <img src={ImageOne} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem voluptas perspiciatis saepe alias dicta repudiandae
            fugit sint necessitatibus! Dolorum odit ducimus ad aperiam quam quae
            asperiores rerum qui nihil id. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Neque ea eius asperiores ratione
            dolorem eligendi ullam porro laboriosam fuga cumque? Vel maxime
            repudiandae aut ratione blanditiis et porro nisi nam.
          </p>
        </div>
        <div className="left-box">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem voluptas perspiciatis saepe alias dicta repudiandae
            fugit sint necessitatibus! Dolorum odit ducimus ad aperiam quam quae
            asperiores rerum qui nihil id. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Error velit id consequatur asperiores
            quis reiciendis dolores sapiente magni possimus, ab earum quod,
            nobis distinctio? Ex nemo deserunt velit quam sequi!
          </p>
          <img src={ImageOne} alt="" />
        </div>
      </div>
      {/* left side end */}

      {/* right side wrap start */}
      <div></div>
      {/* right side wrap emd */}
    </div>
  );
};

export default Faq;
