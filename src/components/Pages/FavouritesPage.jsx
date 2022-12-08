import React from "react";
import BandsList from "../Reusable components/BandsList";
import searchIcon from "../../media/search-icon.svg";

function Favourites() {
  //remember to add "if no favourite" option to display a message
  return (
    <section className="favourite-page">
      <h1>Your favourites</h1>
      <div className="search-nav">
        <input id="searchField" type="text" />
        <img className="search-icon" src={searchIcon} alt="search icon" />
      </div>
      <div className="bands-list-wrapper">
        <BandsList />
        <BandsList />
      </div>
    </section>
  );
}

export default Favourites;
