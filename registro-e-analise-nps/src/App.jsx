import React from "react";
import NavBarMenu from "./NavBarMenu";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <NavBarMenu />
      <Outlet />
    </div>
  );
};

export default App;
