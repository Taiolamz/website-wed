import React from "react";
import HomePage from "../pages/hompage";
import Story from "../pages/story";
import "../styles/layout.css";
import Details from "../pages/details";
import Faq from "../pages/faq";
import Photo from "../pages/photo";
import Rep from "../pages/rep";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdEditNote } from "react-icons/md";

const Layout = () => {
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
        <div className="btn-box">
          <MdEditNote size={20} className="icon" />
          <p>Cash gift</p>
        </div>
      </div>
      
    </div>
  );
};

export default Layout;
