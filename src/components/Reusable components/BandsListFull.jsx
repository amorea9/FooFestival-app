import React from "react";
import BandCard from "./BandCard";

function BandsListFull(props) {
  return (
    <div className="bands-list">
      <h2>Full lineup</h2>

      <div className="bands-list-wrapper">
        {props.scheduleWithDays.map((show) => {
          return show.act != "break" ? (
            <BandCard key={show.act} start={show.start} end={show.end} stage={props.scheduleWithDays.indexOf(show) <= 12 ? "Jotunheim" : props.scheduleWithDays.indexOf(show) <= 24 ? "Midgard" : "Vanaheim"} bandName={show.act} />
          ) : null;
        })}
      </div>
    </div>
  );
}

export default BandsListFull;
