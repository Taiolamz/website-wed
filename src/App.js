import "./App.css";
import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router";
import { routes_group } from "./components/routes";
import Sidebar from "./components/sidebar";
import { Squash as Hamburger } from "hamburger-react";
import Payment from "./pages/payment";
import Modal from "react-awesome-modal";
import { FaMoneyBillWave } from "react-icons/fa";
import Success from "./pages/success-pay";
import "./styles/layout.css";
import { Helmet } from "react-helmet";
import Image from "../src/assets/wedding-ring.png";

function App() {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else if (!showModal) {
      document.body.style.overflowY = "auto";
    }
  }, [showModal]);
  return (
    <React.Fragment>
      <Helmet>
        <title>#Ease24</title>
      </Helmet>
      <div className="harmburger-menu">
        <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" />
        <Sidebar isOpen={isOpen} />
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        {routes_group.map((route, idx) => {
          const { path } = route;
          return <Route key={idx} path={path} element={<route.element />} />;
        })}
      </Routes>
      <div className="btn-wrap-lay">
        <div className="btn-box" onClick={() => setShowModal(true)}>
          <FaMoneyBillWave size={20} className="icon" />
          <p>Cash gift</p>
        </div>
      </div>

      <Modal effect="fadeInLeft" visible={showModal}>
        <Payment
          onCancel={() => setShowModal(false)}
          setPaymentModal={setShowModal}
          setShowSuccessModal={setShowSuccessModal}
        />
      </Modal>

      <Modal visible={showSuccessModal} effect={"fadeInLeft"}>
        <Success
          onCancel={() => setShowSuccessModal(false)}
          onRoute={() => {
            navigate("/home");
            setShowSuccessModal(false);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        />
      </Modal>
    </React.Fragment>
  );
}

export default App;
