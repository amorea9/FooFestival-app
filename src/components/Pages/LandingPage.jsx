import React from "react";
import PlayingNow from "../Reusable components/PlayingNow";
import Schedule from "../Reusable components/Schedule";
import TodaysHeadliners from "../Reusable components/TodaysHeadliners";
import { useState, useEffect } from "react";

function Landing(props) {
  const [liveNow, setLiveNow] = useState({
    jotunheimLiveState: "",
    midgardLiveState: "",
    vanaheimLiveState: "",
    liveShowsAtm: true,
  });

  const [dateNow, setdateNow] = useState({
    today: 0,
  });

  useEffect(() => {
    async function getSchedule() {
      const res = await fetch("http://localhost:8080/schedule");
      const schedule = await res.json();
      console.log(schedule);
      //call the function every minute
      setInterval(() => {
        findLiveBands(schedule);
      }, 10000);
    }
    getSchedule();
  }, []);

  //called every 10 seconds
  function findLiveBands(data) {
    const schedule = data;
    const now = new Date();
    //find day of the week
    const day = now.getDay();
    //update state with current day of the week
    setdateNow({ ...dateNow, today: day });

    //find current time in hours and minutes
    const currentTime = now.getHours() + ":" + now.getMinutes();

    //set live state of festival
    let isFoofestLive = false;

    //find bands playing at Jotunheim
    const playingAtJotunheim = schedule.Jotunheim;

    const playingAtMidgard = schedule.Midgard;
    const playingAtVanaheim = schedule.Vanaheim;
    //outputs an array where each day is presented as an index
    let jotunheimByDays = Object.values(playingAtJotunheim);
    let midgardByDays = Object.values(playingAtMidgard);
    let vanaheimByDays = Object.values(playingAtVanaheim);

    //because data in schedule is provided as 0-based index from monday and date.getNow() counts = based index from Sunday we have to make the two values correlate
    let objDay = 0;
    if (dateNow.today === 0) {
      objDay = 6;
    }
    if (dateNow.today === 1) {
      objDay = day - 1;
    }
    if (dateNow.today === 2) {
      objDay = day - 1;
    }
    if (dateNow.today === 3) {
      objDay = day - 1;
    }
    if (dateNow.today === 4) {
      objDay = day - 1;
    }
    if (dateNow.today === 5) {
      objDay = day - 1;
    }
    if (dateNow.today === 6) {
      objDay = day - 1;
    }

    // Find Live at Jotunheim stage
    let todayAtJotunheim = jotunheimByDays[objDay];
    let liveAtJotunheim = "";
    todayAtJotunheim.forEach((show) => {
      todayAtJotunheim = show.act;
      let jotunheimStart = show.start;
      let jotunheimEnd = show.end;
      //find the act that is live now
      if (todayAtJotunheim != "break" && currentTime > jotunheimStart && currentTime < jotunheimEnd) {
        liveAtJotunheim = show.act;
        isFoofestLive = true;
      }
    });

    //Find live at Midagard
    let todayAtMidgard = midgardByDays[objDay];
    let liveAtMidgard = "";
    todayAtMidgard.forEach((show) => {
      todayAtMidgard = show.act;
      let midgardStart = show.start;
      let midgardEnd = show.end;
      //find the act that is live now
      if (todayAtMidgard != "break" && currentTime > midgardStart && currentTime < midgardEnd) {
        liveAtMidgard = show.act;
        isFoofestLive = true;
      }
    });

    //Find live at Vanaheim
    let todayAtVanaheim = vanaheimByDays[objDay];
    let liveAtVanaheim = "";
    todayAtVanaheim.forEach((show) => {
      todayAtVanaheim = show.act;
      let vanaheimStart = show.start;
      let vanaheimdEnd = show.end;
      //find the act that is live now
      if (todayAtVanaheim != "break" && currentTime > vanaheimStart && currentTime < vanaheimdEnd) {
        liveAtVanaheim = show.act;
        isFoofestLive = true;
      }
      setLiveNow({
        ...liveNow,
        vanaheimLiveState: liveAtVanaheim,
        midgardLiveState: liveAtMidgard,
        jotunheimLiveState: liveAtJotunheim,
        liveShowsAtm: isFoofestLive,
      });
    });
  }

  return (
    <section className="landing-page">
      <section className="hero-section">
        <h1> FooFest 2023</h1>
        <h2>17-23 July</h2>
        <p>The best damn festival ever</p>
      </section>
      <PlayingNow liveNow={liveNow} />
      <Schedule getProgramPage={props.getProgramPage} />
      <TodaysHeadliners />
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
