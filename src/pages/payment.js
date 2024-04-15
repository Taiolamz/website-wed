import React, { useState } from "react";
import "../styles/form.css";
import { FaArrowLeft } from "react-icons/fa";
import ImageFour from "../assets/image-four.jpg";
import { NumericFormat } from "react-number-format";
import { PaystackButton } from "react-paystack";

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

  const config = {
    reference: new Date().getTime().toString(),
    email: details.email,
    amount: handleShowAmount() * 100,
    // publicKey: process.env.REACT_APP_PAYSTACK_KEY,
    publicKey: "pk_live_a01e4a772cbd7ef6993ec71411819390c07947ac",
  };

  const handlePaystackSuccessAction = () => {
    console.log();
    setPaymentModal(false);
    setShowSuccessModal(true);
    setSelectAmount("");
    setDetails((prev) => {
      return {
        ...prev,
        full_name: "",
        email: "",
        phone_number: "",
      };
    });
  };

  const handlePaystackCloseAction = () => {
    console.log("closed");
  };

  const componentProps = {
    ...config,
    disabled: true,
    text:
      details.full_name &&
      details?.email &&
      details.phone_number &&
      selectAmount
        ? `Pay ${handleShowAmount().toFixed(2)}`
        : "Pay",
    onSuccess: () => handlePaystackSuccessAction(),
    onClose: handlePaystackCloseAction,
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
        <div className="form-group">
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

          {!details.full_name &&
          !details.email &&
          !selectAmount &&
          !details.phone_number ? (
            <div className="btn-wrap btn-disable">Pay</div>
          ) : (
            <PaystackButton
              {...componentProps}
              className={`btn-wrap ${
                details.full_name &&
                details.email &&
                selectAmount &&
                details.phone_number
                  ? ""
                  : "btn-disable"
              }`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Payment;
