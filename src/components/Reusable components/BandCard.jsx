import React from "react";

function BandCard() {
  return (
    <div>
      <div className="band-card-main-details">
        <h4>Band name</h4>
        <p>Stage</p>
        <p>Read more about the band </p>
      </div>
      <div className="band-card-side-details">
        <p>11:00</p>
        <div>favourite</div>
      </div>
    </div>
  );
}

export default BandCard;
