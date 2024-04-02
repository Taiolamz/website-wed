import React from "react";
import "../styles/sidebar.css";
import { useNavigate } from "react-router";

const Sidebar = () => {
  const sideitems = [
    {
      name: "Home",
      path: "/home",
    },
    {
      name: "Our Story",
      path: "/our-story",
    },
    {
      name: "Details",
      path: "/details",
    },

    {
      name: "Registry",
      path: "/registry",
    },
    {
      name: "RSVP",
      path: "/rsvp",
    },
    {
      name: "Sponsor",
      path: "/sponsor",
    },
    {
      name: "FAQ",
      path: "/faq",
    },
  ];
  const location = window.location.pathname;
  const navigate = useNavigate();
  return (
    <div
      className={`sidebar-wrap ${
        location === "/details" || location === "/faq"
          ? "sidebar-wrap-right"
          : ""
      }`}
    >
      {sideitems.map((chi, idx) => {
        const { name, path } = chi;

        return (
          <div
            key={idx}
            className={`sidebar-box ${
              location === path ? "sidebar-active-box" : ""
            }`}
            onClick={() => navigate(path)}
          >
            <p>{name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
