import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TopNav(props) {
  const navigate = useNavigate();
  return (
    <nav className="top-nav">
      <ul>
        <li>logo here</li>
        <li>FOOFEST</li>
        <li>en/dk</li>
      </ul>
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
