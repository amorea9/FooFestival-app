import React from "react";

function BottomNav() {
  return (
    <nav className="bottom-nav">
      <ul>
        <li className="bottom-nav-home">
          <a href="">Home</a>
        </li>
        <li>
          <img src="src/media/favourites.svg" alt="favourites icon" />
          <a href="">Favourites</a>
        </li>
        <li>
          <img src="src/media/schedule-icon.svg" alt="schedule icon" />
          <a href="">Schedule</a>
        </li>
        <li>
          <img src="src/media/livenow-icon.svg" alt="live now icon" />
          <a href="">Live</a>
        </li>
      </ul>
    </nav>
  );
}

export default BottomNav;
