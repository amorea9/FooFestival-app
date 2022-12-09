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
            Home
          </Link>
        </li>
        <li>
          <Link to={"/favourites-page#top"}>
            <img src={fullHeart} alt="favourites icon" />
            Favourites
          </Link>
        </li>
        <li>
          <Link to={"/program-page#top"}>
            <img src={scheduleIcon} alt="schedule icon" />
            Schedule
          </Link>
        </li>
        <li>
          <Link smooth to={"/landing-page#top"}>
            <img src={liveNow} alt="live now icon" />
            Live
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default BottomNav;
