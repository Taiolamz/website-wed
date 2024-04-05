import React, { useState } from "react";
import HomePage from "../pages/hompage";
import Story from "../pages/story";
import "../styles/layout.css";
import Details from "../pages/details";
import Faq from "../pages/faq";
import Photo from "../pages/photo";
import Rep from "../pages/rep";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdEditNote } from "react-icons/md";
import Payment from "../pages/payment";
import Modal from "react-awesome-modal";

const Layout = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="layout-con">
      <HomePage />
      <Story />
      <Details />
      <Faq />
      <Photo />
      <Rep />

      <div className="btn-wrap-lay">
        <div className="btn-box">
          <FaMoneyBillWave size={20} className="icon" />
          <p>Wishlsit</p>
        </div>
        <div className="btn-box" onClick={() => setShowModal(true)}>
          <MdEditNote size={20} className="icon" />
          <p>Cash gift</p>
        </div>
      </div>

      {/* modal start */}
      <Modal effect="fadeInLeft" visible={showModal}>
        <Payment onCancel={() => setShowModal(false)} />
      </Modal>
      {/* modal end */}
    </div>
  );
};

export default Layout;
