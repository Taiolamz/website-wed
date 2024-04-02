import React from "react";
import "../styles/details.css";

const Details = () => {
  return (
    <div className="details-wrap">
      <p className="header-text">SOME INFO YOU NEED</p>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        laudantium molestiae repudiandae eum sunt dolorem velit corrupti, neque
        ipsa consequatur sequi architecto expedita commodi non aliquam maiores
        adipisci ipsum repellat.
      </p>

      <p className="text">
        ipsa consequatur sequi architecto expedita commodi non aliquam maiores
        adipisci ipsum repellat.
      </p>

      <p className="text-thick font-weight-bold">Click consequatur sequi architecto expedita commodi non al</p>

      <div className="btn-wrap">
        <p className="btn">Click here</p>
        <p className="btn">Click here</p>
      </div>
    </div>
  );
};

export default Details;
