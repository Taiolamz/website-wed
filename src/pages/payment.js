import React, { useState } from "react";
import "../styles/form.css";
import { FaTimes } from "react-icons/fa";
import ImageOne from "../assets/image-one.jpg";

const Payment = ({ onCancel }) => {
  const [details, setDetails] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    amount: "",
  });

  const formatLabel = (key) => {
    return key
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleChange = (key, value) => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      [key]: value,
    }));
  };

  const amountDisplay = [
    {
      label: "NGN 5,000",
      value: 5000,
    },
    {
      label: "NGN 10,000",
      value: 10000,
    },
    {
      label: "NGN 20,000",
      value: 20000,
    },
    {
      label: "NGN 50,000",
      value: 50000,
    },
    {
      label: "NGN 100,000",
      value: 100000,
    },
  ];

  const [selectAmount, setSelectAmount] = useState("");

  return (
    <div className="form-wrap">
      {/* image wrap start */}
      <div className="left-wrap">
        <img src={ImageOne} alt="love image" />
      </div>
      {/* image wrap end */}

      {/* form wrap start*/}
      <div className="right-wrap">
        <p className="text-head">We love and Appreciate You</p>
        <FaTimes size={20} className="cancel-icon" onClick={onCancel} />
        <form className="form-group">
          {Object.keys(details).map((detail, index) => (
            <div className="form-box">
              <label key={index} htmlFor={formatLabel(detail)}></label>
              <input
                name={detail}
                id={detail}
                placeholder={`Enter ${formatLabel(detail).toLowerCase()}`}
                value={detail === "amount" ? selectAmount : details[detail]}
                className={`input ${details[detail] ? "input-active" : ""} `}
                onChange={(e) => {
                  if (detail === "amount") {
                    setDetails((prev) => {
                      return {
                        ...prev,
                        amount: selectAmount || e.target.value,
                      };
                    });
                  } else {
                    handleChange(detail, e.target.value);
                  }
                }}
              />
              {detail === "amount" ? (
                <div className="amount-wrap">
                  {amountDisplay.map((chi, idx) => (
                    <div
                      className="amount"
                      onClick={() => setSelectAmount(chi?.label)}
                    >
                      <p className="text" key={idx}>
                        {chi.label}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <button className="btn-wrap">Proceed to Paystack</button>
        </form>
      </div>
      {/* form wrap end*/}
    </div>
  );
};

export default Payment;
