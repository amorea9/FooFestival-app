import React from "react";
import LoginPage from "../components/Pages/LoginPage";
import { useState, useEffect } from "react";
import BottomNav from "../components/Reusable components/BottomNav";
import "../sass/style.scss";
import { Outlet } from "react-router-dom";
import TopNav from "../components/Reusable components/TopNav";

function App() {
  //state used to determine if the user is logged in or not. it's faked
  const [login, setLogin] = useState(false);
  //state for scheduled bands. app knows so that all the routes may know
  const [scheduledBands, setScheduledBands] = useState([]);
  //state for live shows
  const [liveNow, setLiveNow] = useState({
    jotunheimLiveState: "",
    midgardLiveState: "",
    vanaheimLiveState: "",
    liveShowsAtm: true,
  });

  //state for date
  const [dateNow, setdateNow] = useState({
    today: 0,
  });
  //fetching data
  useEffect(() => {
    async function getSchedule() {
      const res = await fetch("http://localhost:8080/schedule");
      const schedule = await res.json();
      setScheduledBands(schedule);
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
    <div className="layout-wrapper">
      <TopNav setLogin={setLogin} login={login} />

      {login === false ? <LoginPage setLogin={setLogin} login={login} /> : <Outlet context={{ schedule: [scheduledBands, setScheduledBands], live: [liveNow, setLiveNow], date: [dateNow, setdateNow] }} />}

      <BottomNav />
    </div>
  );
}

export default App;
