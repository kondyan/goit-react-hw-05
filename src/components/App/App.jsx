import css from "./App.module.css";
import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const App = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default App;
