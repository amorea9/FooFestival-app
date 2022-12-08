import React from "react";
import emptyHeart from "../../media/favourites-empty.svg";
function BandCard() {
  return (
    <div className="band-card">
      <h3>Band name</h3>
      <div className="band-card-content">
        <div className="band-card-main-content">
          <p>Stage</p>
          <p>Read more &#10132;</p>
        </div>
        <div className="band-card-side-content">
          <p>11:00</p>
          <img src={emptyHeart} alt="empty heart icon" />
        </div>
      </div>
    </div>
  );
}

export default BandCard;
