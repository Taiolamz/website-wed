import React, { useEffect, useState } from "react";
import "../styles/details.css";
import ImageOne from "../assets/image-one.jpg";
import ImageTwo from "../assets/image-two.jpg";
import Modal from "react-awesome-modal";
import ReadMore from "../components/read-more";
import AOS from "aos";
import "aos/dist/aos.css";

const Details = () => {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (showMore) {
      document.body.style.overflow = "hidden";
    } else if (!showMore) {
      document.body.style.overflowY = "auto";
    }
  }, [showMore]);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="details-wrap">
      <div data-aos="fade-down" data-aos-duration="1000">
        <div className="story-header">
          <p className="story-head">OUR STORY </p>
          <p>👩🏽‍❤️‍👨🏾</p>
        </div>
        <p className="story-subtext">Who doesn’t love a short love story? </p>

        <p className="story-time">
          I actually met Folayemi, on X formerly called Twitter, I actually
          hardly interact on X, all I do is to scroll and just like and retweet
          posts when need be. The first time I would ever know her was in
          December 2022, when she made a viral post about her former classmate
          needing financial support on X, the post went viral, I saw it
          retweeted and scrolled past as usual. Few days later she made a post
          on X, as at this time I was not following her, her the posts were
          coming to my TL, so this post had a caption like “she and her mum" it
          caught my attention especially seeing the mum was young too and they
          were both beautiful. Unknown to me it was...
          <span onClick={() => setShowMore(true)} className="read-more">
            Read More 😉
          </span>
        </p>
      </div>

      {/* underline */}

      {/* first side start*/}
      <div className="image-wrap">
        <img
          data-aos="fade-right"
          data-aos-duration="1000"
          className="img"
          src={ImageOne}
          alt=""
        />
        <img
          data-aos="fade-left"
          data-aos-duration="1000"
          className="img"
          src={ImageTwo}
          alt=""
        />
      </div>
      {/* first side end*/}

      {/* MODAL WRAP */}
      <Modal effect="fadeInLeft" visible={showMore}>
        <ReadMore onCancel={() => setShowMore(false)} />
      </Modal>
    </div>
  );
};

export default Details;
