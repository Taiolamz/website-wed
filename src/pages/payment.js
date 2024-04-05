import React, { useState } from "react";
import "../styles/form.css";
import { FaArrowLeft, FaTimes } from "react-icons/fa";
import ImageOne from "../assets/image-one.jpg";
// import PaystackPop from "react-paystack";
import PaystackPop from "@paystack/inline-js";

const Payment = ({ onCancel }) => {
  const [details, setDetails] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    amount: "",
  });
  const [selectAmount, setSelectAmount] = useState("");

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

  function formatNumber(number) {
    return number.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const paystackKey = "pk_test_d7c4fae3a0c8d22ff182d6208d72b42b0b754e76";
    const { full_name, email, phone_number } = details;

    if (full_name && email && phone_number && selectAmount) {
      let handler = PaystackPop.setup({
        key: paystackKey,
        name: full_name,
        email: email,
        amount: selectAmount * 100,
        ref: "" + Math.floor(Math.random() * 1000000000 + 1),
        onClose: () => {
          alert("Window closed.");
        },
        callback: (response) => {
          let message = "Payment complete! Reference: " + response.reference;
          alert(message);
        },
      });

      handler.openIframe();
    } else {
      return;
    }
  };

  return (
    <div className="form-wrap">
      {/* image wrap start */}
      <div className="left-wrap">
        <img src={ImageOne} alt="love image" />
      </div>
      {/* image wrap end */}

      {/* form wrap start*/}
      <div className="right-wrap">
        <div className="title-wrap">
          <FaArrowLeft className="icon" onClick={onCancel} />
          <p className="text-head">We love and Appreciate You</p>
        </div>
        {/* <FaTimes size={20} className="cancel-icon" onClick={onCancel} /> */}
        <form className="form-group" onSubmit={handleSubmit}>
          {Object.keys(details).map((detail, index) => (
            <div className="form-box">
              {detail === "amount" ? (
                <span className="currency-unit"> NGN </span>
              ) : null}
              <label key={index} htmlFor={formatLabel(detail)}>
                {/* {formatLabel(detail)} */}
              </label>
              <input
                name={detail}
                type="text"
                id={detail}
                placeholder={`Enter ${formatLabel(detail).toLowerCase()}`}
                value={
                  detail === "amount"
                    ? formatNumber(selectAmount)
                    : details[detail]
                }
                className={`input ${
                  details[detail]
                    ? "input-active"
                    : detail === "amount"
                    ? "input-placeholder"
                    : ""
                } `}
                onChange={(e) => {
                  const { name, value } = e.target;
                  if (name === "amount") {
                    setSelectAmount(value);
                  } else {
                    handleChange(name, value);
                  }
                }}
              />
              {detail === "amount" && (
                <div className="amount-wrap">
                  {amountDisplay.map((chi, idx) => (
                    <div
                      className="amount"
                      onClick={() => setSelectAmount(chi.value)}
                      key={idx}
                    >
                      <p className="text">{chi.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button
            className={`btn-wrap ${
              details.full_name &&
              details.email &&
              selectAmount &&
              details.phone_number
                ? ""
                : "btn-disable"
            }`}
          >
            Proceed to Paystack
          </button>
        </form>
      </div>
      {/* form wrap end*/}
    </div>
  );
};

export default Payment;
