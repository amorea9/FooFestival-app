import React from "react";
import { Link } from "react-router-dom";

function TopNav() {
  return (
    <nav className="top-nav">
      <ul>
        <li>logo here</li>
        <li>FOOFEST</li>
        <li>en/dk</li>
      </ul>
      <Link to={"/log-in"}>Log out</Link>
    </nav>
  );
}

export default TopNav;
