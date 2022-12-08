import React from "react";
import fullHeart from "../../media/favourites-full.svg";
import scheduleIcon from "../../media/schedule-icon.svg";
import liveNow from "../../media/livenow-icon.svg";
function BottomNav() {
  return (
    <nav className="bottom-nav">
      <ul>
        <li className="bottom-nav-home">
          <a href="">Home</a>
        </li>
        <li>
          <img src={fullHeart} alt="favourites icon" />
          <a href="">Favourites</a>
        </li>
        <li>
          <img src={scheduleIcon} alt="schedule icon" />
          <a href="">Schedule</a>
        </li>
        <li>
          <img src={liveNow} alt="live now icon" />
          <a href="">Live</a>
        </li>
      </ul>
    </nav>
  );
}

export default BottomNav;
