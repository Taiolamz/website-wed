import React from "react";
import "../styles/details.css";
import ImageOne from "../assets/image-one.jpg";
import ImageTwo from "../assets/image-two.jpg";

const Details = () => {
  return (
    <div className="details-wrap">
      <p className="story-header">OUR STORY</p>
      <p className="story-subtext">Who doesn’t love a short love story? </p>
      <p className="story-time">
        Once upon a time, in a bustling café nestled in the heart of the city,
        our eyes first met over steaming cups of coffee. She sat in the corner,
        lost in thought, while I found myself captivated by her graceful
        presence. With a hesitant smile, I approached her table, struck by her
        beauty and the gentle warmth in her eyes. We exchanged shy hellos and
        soon found ourselves engrossed in conversation, as if we had known each
        other for a lifetime. From that moment on, every laugh shared, every
        glance exchanged, felt like destiny unfolding before us. In each other's
        company, we discovered a connection that transcended time and space,
        weaving our hearts together in a tale of serendipitous love. And so, in
        that cozy café where it all began, we embarked on a journey of love,
        bound by the magic of our chance encounter.
      </p>
      {/* underline */}

      {/* first side start*/}
      <div className="image-wrap">
        <img className="img" src={ImageOne} alt="" />
        <img className="img" src={ImageTwo} alt="" />
      </div>
      {/* first side end*/}
    </div>
  );
};

export default Details;
