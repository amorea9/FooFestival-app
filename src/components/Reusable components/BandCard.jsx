import React from "react";
import { Link } from "react-router-dom";
import emptyHeart from "../../media/favourites-empty.svg";
function BandCard(props) {
  return (
    <Link className="band-card" to={"/band-page#top"}>
      <h3>Metallica</h3>
      <div className="band-card-content">
        <div className="band-card-main-content">
          <p>Jotunheim</p>
          <p>8:00 - 10:00</p>
          {props.page === "bandPage" ? null : <p>Read more &#10132;</p>}
        </div>
        <div className="band-card-side-content">
          <img src={emptyHeart} alt="empty heart icon" />
        </div>
      </div>
    </Link>
  );
}

export default BandCard;
