import React from "react";
import BandsList from "../Reusable components/BandsList";

function Favourites() {
  //remember to add "if no favourite" option to display a message
  return (
    <div className="bands-list-wrapper">
      <h1>Your favourites</h1>
      <p>search icon here</p>
      <BandsList />
      <BandsList />
    </div>
  );
}

export default Favourites;
