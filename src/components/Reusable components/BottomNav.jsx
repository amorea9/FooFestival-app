import React from "react";
import fullHeart from "../../media/favourites-full.svg";
import scheduleIcon from "../../media/schedule-icon.svg";
import liveNow from "../../media/livenow-icon.svg";
import homeIcon from "../../media/home-icon.svg";
import { HashLink as Link } from "react-router-hash-link";

function BottomNav(props) {
  return (
    <nav className="bottom-nav">
      <ul>
        <li>
          <Link to={"/landing-page#top"}>
            <img src={homeIcon} alt="favourites icon" />
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to={"/favourites-page#top"}>
            <img src={fullHeart} alt="favourites icon" />
            <p>Favourites</p>
          </Link>
        </li>
        <li>
          <Link to={"/program-page#top"}>
            <img src={scheduleIcon} alt="schedule icon" />
            <p> Schedule</p>
          </Link>
        </li>
        <li>
          <Link smooth to={"/landing-page#top"}>
            <img src={liveNow} alt="live now icon" />
            <p> Live</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default BottomNav;
