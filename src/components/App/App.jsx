import css from "./App.module.css";
import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";
import HomePageDataProvider from "../../providers/HomePageDataProvider";

const App = () => {
  return (
    <HomePageDataProvider>
      <Navigation />
      <Outlet />
    </HomePageDataProvider>
  );
};

export default App;
