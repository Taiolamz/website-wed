import "../styles/sidebar.css";
import React from "react";
import { useNavigate } from "react-router";

const Sidebar = ({ isOpen, setOpen }) => {
  const sideitems = [
    {
      name: "Home 👩🏽‍❤️‍👨🏾",
      path: "/home",
    },
    {
      name: "Our love note 💕",
      path: "/our-love-note",
    },
    {
      name: "How we met 😉",
      path: "/how-we-met",
    },

    {
      name: "Pictures 📸",
      path: "/pictures",
    },
    {
      name: "Appreciation  🙏🏾",
      path: "/appreciation",
    },
  ];
  const location = window.location.pathname;
  const navigate = useNavigate();
  return (
    <div className={`sidebar-wrap ${isOpen ? "open-side-wrap" : ""}  `}>
      <div className="side-content">
        {sideitems.map((chi, idx) => {
          const { name, path } = chi;
          return (
            <div
              key={idx}
              className={`sidebar-box ${
                location === path ? "sidebar-active-box" : ""
              }`}
              onClick={() => {
                navigate(path);
                setOpen(false);
              }}
            >
              <p>{name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
