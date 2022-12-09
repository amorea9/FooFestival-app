import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../media/foofest-logo.png";

function TopNav(props) {
  const navigate = useNavigate();
  return (
    <nav className="top-nav">
      <Link to={"/landing-page#top"}>
        <img src={logo} alt="favourites icon" />{" "}
      </Link>

      <Link
        onClick={() => {
          props.setLogin(false);
          navigate("/log-in");
        }}
      >
        Log out
      </Link>
    </nav>
  );
}

export default TopNav;
