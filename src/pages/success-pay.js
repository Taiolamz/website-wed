import React from "react";
import "../styles/sucess.css";
import { FaTimes } from "react-icons/fa";
import { IoReturnDownBackOutline } from "react-icons/io5";

const Success = ({ onCancel, onRoute }) => {
  return (
    <div className="success-wrap">
      <FaTimes className="icon" onClick={onCancel} />
      <p className="emoji">💕💕🫶🏽💕💕</p>
      <p className="text"></p>
      <p className="text">
        Payment Successful. <br /> A heartfelt thank you for your generous
        support
      </p>
      {/* btn wrap */}

      <p className="return-wrap" onClick={onRoute}>
        <IoReturnDownBackOutline />
        Continue on our love page
      </p>
    </div>
  );
};

export default Success;
