import React from "react";
import HomePage from "../pages/hompage";
import Story from "../pages/story";
import "../styles/layout.css";
import Details from "../pages/details";
import Faq from "../pages/faq";

const Layout = () => {
  return (
    <div>
      <div className="layout-wrap">
        <HomePage />
        <Story />
        <Details />
        <Faq />
      </div>
    </div>
  );
};

export default Layout;
