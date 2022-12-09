import React from "react";
import { Link } from "react-router-dom";

function TodaysHeadliners() {
  return (
    <article className="todays-headliners-comp">
      <h2>Today's Headliners</h2>
      <div className="headliner">
        <h4>
          Who:<span> band name</span>
        </h4>
        <h4>
          When:<span> start time</span>
        </h4>
        <h4>
          Where:<span> stage name</span>
        </h4>
      </div>
      <div className="headliner">
        <h4>
          Who:<span> band name</span>
        </h4>
        <h4>
          When:<span> start time</span>
        </h4>
        <h4>
          Where:<span> stage name</span>
        </h4>
      </div>
      <div className="headliner">
        <h4>
          Who:<span> band name</span>
        </h4>
        <h4>
          When:<span> start time</span>
        </h4>
        <h4>
          Where:<span> stage name</span>
        </h4>
      </div>
      <Link to={"/program-page"}>Click here to see the full schedule</Link>
    </article>
  );
}

export default TodaysHeadliners;
