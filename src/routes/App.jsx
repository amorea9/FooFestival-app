import React from "react";
import LoginPage from "../components/Pages/LoginPage";
import { useState } from "react";
import BottomNav from "../components/Reusable components/BottomNav";
import "../sass/style.scss";
import { Outlet } from "react-router-dom";
import TopNav from "../components/Reusable components/TopNav";

function App() {
  const [login, setLogin] = useState(false);

  //TODO: add styling to band page
  // if state is "logged out" display login component
  return (
    <div className="layout-wrapper">
      <TopNav setLogin={setLogin} login={login} />

      {login === false ? <LoginPage setLogin={setLogin} login={login} /> : <Outlet />}

      <BottomNav />
    </div>
  );
}

export default App;
