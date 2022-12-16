import React from "react";
import PlayingNow from "../Reusable components/PlayingNow";
import Schedule from "../Reusable components/Schedule";
import { useOutletContext } from "react-router-dom";

function Landing(props) {
  const {
    schedule: [scheduledBands, setSheduledBands],
    live: [liveNow, setLiveNow],
    date: [dateNow, setdateNow],
  } = useOutletContext();

  return (
    <section className="landing-page">
      {/* <section className="hero-section"> */}
      <section className="SplashContainer">
        <h1>The best damned festival</h1>
        <h1>
          Is here <br /> now
        </h1>
        {/* </section> */}
      </section>
      <PlayingNow liveNow={liveNow} />
      <Schedule />
      {/* <TodaysHeadliners /> */}
      <article className="news-section">
        <div>
          <h2>News & Updates</h2>
          <p>Check out the latest news. Don't miss any updates!</p>
        </div>
        <div>
          <h2>Party safely</h2>
          <p>Here you can find out where medical aid points are located, drug safety regulations and more.</p>
        </div>
      </article>
    </section>
  );
}

export default Landing;
