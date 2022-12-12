import React from "react";
import LoginPage from "../components/Pages/LoginPage";
import { useState, useEffect } from "react";
import BottomNav from "../components/Reusable components/BottomNav";
import "../sass/style.scss";
import { Outlet } from "react-router-dom";
import TopNav from "../components/Reusable components/TopNav";

function App() {
  //state used to determine if the user is logged in or not. it's faked

  const [login, setLogin] = useState(false);

  return (
    <div className="layout-wrapper">
      <TopNav setLogin={setLogin} login={login} />

      {login === false ? <LoginPage setLogin={setLogin} login={login} /> : <Outlet />}

      <BottomNav />
    </div>
  );
}

export default App;
