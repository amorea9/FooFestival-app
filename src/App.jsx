import React from "react";
import BandPage from "./components/Pages/BandPage";
import FavouritesPage from "./components/Pages/FavouritesPage";
import LandingPage from "./components/Pages/LandingPage";
import LoginPage from "./components/Pages/LoginPage";
import ProgramPage from "./components/Pages/ProgramPage";
import BottomNav from "./components/Reusable components/BottomNav";
import "./sass/style.scss";
import { useState } from "react";

function App() {
  const pages = { page1: "login", page2: "landing", page3: "program", page4: "favourites", page5: "band" };
  const [page, setPage] = useState(pages.page1);
  //TODO: add page links to all pages (only done on login and program page so far). Find a way to not repeat yourself
  //TODO: add page links to bottom nav too
  //TODO: add styling to band page

  // we can maybe optimise this?
  function getLoginPage(page) {
    setPage((page) => (page = pages.page1));
  }
  function getLandingPage(page) {
    setPage((page) => (page = pages.page2));
  }
  function getProgramPage(page) {
    setPage((page) => (page = pages.page3));
  }
  function getFavouritesPage(page) {
    setPage((page) => (page = pages.page4));
  }
  function getBandPage(page) {
    setPage((page) => (page = pages.page5));
  }

  return (
    <div className="layout-wrapper">
      <nav className="top-nav">
        <ul>
          <li>logo here</li>
          <li>FOOFEST</li>
          <li>en/dk</li>
        </ul>
      </nav>
      {page === "login" ? <LoginPage getLandingPage={getLandingPage} /> : null}
      {page === "landing" ? <LandingPage getProgramPage={getProgramPage} /> : null}
      {page === "program" ? <ProgramPage /> : null}
      {page === "favourites" ? <FavouritesPage /> : null}
      {page === "band" ? <BandPage /> : null}
      <BottomNav />
    </div>
  );
}

export default App;
