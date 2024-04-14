import React, { useState } from "react";
import HomePage from "../pages/hompage";
import "../styles/layout.css";


const Layout = () => {
  return (
    <div className="layout-con" style={{ minWidth: "100%" }}>
      <HomePage />
    </div>
  );
};

export default Layout;
