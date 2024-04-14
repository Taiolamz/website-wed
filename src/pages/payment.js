import React, { useState } from "react";
import "../styles/form.css";
import { FaArrowLeft } from "react-icons/fa";
import ImageFour from "../assets/image-four.jpg";
import PaystackPop from "@paystack/inline-js";
import { NumericFormat } from "react-number-format";

const Payment = ({ onCancel, setPaymentModal, setShowSuccessModal }) => {
  const [details, setDetails] = useState({
    full_name: "",
    email: "",
    phone_number: "",
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

  function formatNumberWithoutComma(numb) {
    var regex = /[,\sNG]/g;
    var result = numb.replace(regex, "");
    return result;
  }

  const handleShowAmount = () => {
    const newAmount = formatNumberWithoutComma(selectAmount);

    if (Number(newAmount) > 1999) {
      return Number(newAmount) + Number(newAmount) * 0.016 + 100;
    } else {
      return Number(newAmount) + Number(newAmount) * 0.016;
    }
  };

  const handleAmountChange = (e) => {
    const newValue = e.target.value;
    if (newValue === "") {
      setSelectAmount(newValue);
      return;
    }
    const numericValue = parseFloat(newValue.replace(/,/g, ""));
    if (!isNaN(numericValue)) {
      setSelectAmount(numericValue.toLocaleString());
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const paystackKey = process.env.REACT_APP_PAYSTACK_KEY;
    const { full_name, email, phone_number, amount } = details;

    if (full_name && email && phone_number && (selectAmount || amount)) {
      let handler = PaystackPop.setup({
        key: paystackKey,
        name: full_name,
        email: email,
        amount: handleShowAmount() * 100,
        ref: "" + Math.floor(Math.random() * 1000000000 + 1),
        onClose: () => {
          alert("Window closed.");
        },
        onSuccess: () => {
          setPaymentModal(false);
          setShowSuccessModal(true);
          setSelectAmount("");
          setDetails((prev) => {
            return {
              ...prev,
              full_name: "",
              email: "",
              phone_number: "",
              amount: "",
            };
          });
        },
      });

      handler.openIframe();
    } else {
      return;
    }
  };

  return (
    <div className="form-wrap">
      <div className="left-wrap">
        <img src={ImageFour} alt="love image" />
      </div>

      <div className="right-wrap">
        <div className="title-wrap">
          <FaArrowLeft
            className="icon"
            onClick={() => {
              onCancel();
              setDetails((prev) => {
                return {
                  ...prev,
                  full_name: "",
                  email: "",
                  phone_number: "",
                  amount: "",
                };
              });
              setSelectAmount("");
            }}
          />
          <p className="text-head">We love and Appreciate You</p>
        </div>
        <form className="form-group" onSubmit={handleSubmit}>
          {Object.keys(details).map((detail, index) => (
            <div className="form-box">
              {detail === "amount" ? (
                <span className="currency-unit"> NGN </span>
              ) : null}
              <label key={index} htmlFor={formatLabel(detail)}></label>
              <input
                name={detail}
                type="text"
                id={detail}
                placeholder={`Enter ${formatLabel(detail).toLowerCase()}`}
                value={details[detail]}
                className={`input ${
                  details[detail]
                    ? "input-active"
                    : detail === "amount"
                    ? "input-placeholder"
                    : ""
                } `}
                onChange={(e) => {
                  const { name, value } = e.target;
                  handleChange(name, value);
                }}
              />
            </div>
          ))}
          <div className="form-box">
            <label className="currency-unit"> NGN </label>

            <NumericFormat
              className={`input ${selectAmount && "input-active"}`}
              decimalScale={3}
              style={{ paddingLeft: "2.5rem" }}
              decimalSeparator="."
              type="text"
              name="amount"
              onChange={handleAmountChange}
              thousandSeparator={","}
              value={selectAmount}
              id="amount"
              placeholder="Enter Amount"
            />

            {selectAmount && (
              <p style={{ color: "#565454", fontSize: ".8rem" }}>
                {formatNumberWithoutComma(selectAmount) < 2000
                  ? "+1.5% processing fee"
                  : "+1.5% + ₦100 processing fee"}
              </p>
            )}

            <div className="amount-wrap">
              {amountDisplay.map((chi, idx) => (
                <div
                  className="amount"
                  onClick={() => setSelectAmount(chi.label)}
                  key={idx}
                >
                  <p className="text">{chi.label}</p>
                </div>
              ))}
            </div>
          </div>
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
            {details.full_name &&
            details?.email &&
            details.phone_number &&
            selectAmount
              ? `Pay ${handleShowAmount().toFixed(2)}`
              : "Pay"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
