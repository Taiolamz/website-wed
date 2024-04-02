import "./App.css";
import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { routes_group } from "./components/routes";
import Sidebar from "./components/sidebar";
import Layout from "./components/layout";

function App() {
  return (
    <React.Fragment>
      <Sidebar />
      {/* <Layout /> */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        {routes_group.map((route, idx) => {
          const { path } = route;
          return <Route key={idx} path={path} element={<route.element />} />;
        })}
      </Routes>
    </React.Fragment>
  );
}

export default App;
