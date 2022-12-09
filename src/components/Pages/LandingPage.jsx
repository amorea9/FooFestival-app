import React from "react";
import PlayingNow from "../Reusable components/PlayingNow";
import Schedule from "../Reusable components/Schedule";
import TodaysHeadliners from "../Reusable components/TodaysHeadliners";

function Landing(props) {
  return (
    <section className="landing-page">
      <section>
        <h1> FooFest 2023</h1>
        <h2>17-23 July</h2>
        <p>The best damn festival ever</p>
      </section>
      <PlayingNow liveNow={props.liveNow} />
      <Schedule />
      <TodaysHeadliners />
      <section className="news-section">
        <div>
          <h2>News & Updates</h2>
          <p>Text here</p>
        </div>
        <div>
          <h2>Party safely</h2>
          <p>Text here</p>
        </div>
      </section>
    </section>
  );
}

export default Landing;
