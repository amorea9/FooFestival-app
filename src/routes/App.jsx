import React from "react";
import BandPage from "../components/Pages/BandPage";
import FavouritesPage from "../components/Pages/FavouritesPage";
import LandingPage from "../components/Pages/LandingPage";
import LoginPage from "../components/Pages/LoginPage";
import ProgramPage from "../components/Pages/ProgramPage";
import BottomNav from "../components/Reusable components/BottomNav";
import "../sass/style.scss";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import TopNav from "../components/Reusable components/TopNav";

function App() {
  //TODO: add styling to band page

  return (
    <div className="layout-wrapper">
      <TopNav />
      <Outlet />
      <LoginPage />
      <BottomNav />
    </div>
  );
}

export default App;
