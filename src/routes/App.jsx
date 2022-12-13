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
    jotunheimNextLiveState: "",
    midgardLiveState: "",
    midgardNextLiveState: "",
    vanaheimLiveState: "",
    vanaheimNextLiveState: "",
    nextLivesStart: "",
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
  //called every 10 seconds
  function findLiveBands(data) {
    const schedule = data;
    const now = new Date();
    //find day of the week
    const day = now.getDay();
    //update state with current day of the week
    setdateNow({ ...dateNow, today: day });

    //find current time in hours and minutes
    //const currentTime = now.getHours() + ":" + now.getMinutes();
    let currentHours = now.getHours();
    currentHours = ("0" + currentHours).slice(-2);
    let currentMins = now.getMinutes();
    currentMins = ("0" + currentMins).slice(-2);
    const currentTime = currentHours + ":" + currentMins;
    console.log("currentTime", currentTime);

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

    if (day === 0) {
      objDay = 6;
    }
    if (day === 1) {
      objDay = day - 1;
    }
    if (day === 2) {
      objDay = day - 1;
    }
    if (day === 3) {
      objDay = day - 1;
    }
    if (day === 4) {
      objDay = day - 1;
    }
    if (day === 5) {
      objDay = day - 1;
    }
    if (day === 6) {
      objDay = day - 1;
    }

    // Find Live at Jotunheim stage
    let todayAtJotunheim = jotunheimByDays[objDay];
    let liveAtJotunheim = "";
    let jotunheimToday = "";
    let nextLiveAtJotunheim = "";
    let nextUpStart = "";
    todayAtJotunheim.forEach((show) => {
      jotunheimToday = show.act;
      let jotunheimStart = show.start;
      let jotunheimEnd = show.end;
      let liveIndex = 0;
      let nextUp = 0;
      let nextActJotunheim = "";
      //find the act that is live now
      if (jotunheimToday != "break" && currentTime > jotunheimStart && currentTime < jotunheimEnd) {
        //get index of event object
        liveIndex = todayAtJotunheim.indexOf(show);
        //console.log("jotunheimliveIndex:", jotunheimliveIndex);
        liveAtJotunheim = show.act;
        console.log(jotunheimStart);
        console.log(jotunheimEnd);
        console.log(liveAtJotunheim);
        isFoofestLive = true;
        // find next up
        //get index of next event object
        nextUp = liveIndex + 1;
        //check if next event is "break"
        if (todayAtJotunheim[nextUp].act === "break") {
          nextUp = liveIndex + 2;
          nextActJotunheim = todayAtJotunheim[nextUp].act;
          nextUpStart = todayAtJotunheim[nextUp].start;
          nextLiveAtJotunheim = nextActJotunheim;
        }
        nextUpStart = todayAtJotunheim[nextUp].start;
        nextActJotunheim = todayAtJotunheim[nextUp].act;
        nextLiveAtJotunheim = nextActJotunheim;
        console.log(nextActJotunheim);
      }
    });

    //Find live at Midagard
    let todayAtMidgard = midgardByDays[objDay];
    let liveAtMidgard = "";
    let midgardToday = "";
    let nextLiveAtMidgard = "";
    todayAtMidgard.forEach((show) => {
      midgardToday = show.act;
      let midgardStart = show.start;
      let midgardEnd = show.end;
      let liveIndex = 0;
      let nextUp = 0;
      let nextActMidgard = "";
      //find the act that is live now
      if (midgardToday != "break" && currentTime > midgardStart && currentTime < midgardEnd) {
        //get index of event object
        liveIndex = todayAtMidgard.indexOf(show);
        liveAtMidgard = show.act;
        isFoofestLive = true;

        //find next up
        //get index of next event object
        nextUp = liveIndex + 1;
      }
      //check if next event is "break"
      if (todayAtMidgard[nextUp].act === "break") {
        nextUp = liveIndex + 2;
        nextActMidgard = todayAtMidgard[nextUp].act;
        nextLiveAtMidgard = nextActMidgard;
      }
      nextActMidgard = todayAtMidgard[nextUp].act;
      nextLiveAtMidgard = nextActMidgard;
    });

    //Find live at Vanaheim
    let todayAtVanaheim = vanaheimByDays[objDay];
    let liveAtVanaheim = "";
    let vanaheimToday = "";
    let nextLiveAtVanaheim = "";
    todayAtVanaheim.forEach((show) => {
      vanaheimToday = show.act;
      let vanaheimStart = show.start;
      let vanaheimdEnd = show.end;
      let liveIndex = 0;
      let nextUp = 0;
      let nextActVanaheim = "";
      //find the act that is live now
      if (vanaheimToday != "break" && currentTime > vanaheimStart && currentTime < vanaheimdEnd) {
        liveIndex = todayAtVanaheim.indexOf(show);
        liveAtVanaheim = show.act;
        isFoofestLive = true;

        //find next up
        nextUp = liveIndex + 1;
      }
      //check if next event is "break"
      if (todayAtVanaheim[nextUp].act === "break") {
        nextUp = liveIndex + 2;
        nextActVanaheim = todayAtVanaheim[nextUp].act;
        nextLiveAtVanaheim = nextActVanaheim;
      }
      nextActVanaheim = todayAtVanaheim[nextUp].act;
      nextLiveAtVanaheim = nextActVanaheim;
    });
    setLiveNow({
      ...liveNow,
      vanaheimLiveState: liveAtVanaheim,
      vanaheimNextLiveState: nextLiveAtVanaheim,
      midgardLiveState: liveAtMidgard,
      midgardNextLiveState: nextLiveAtMidgard,
      jotunheimLiveState: liveAtJotunheim,
      jotunheimNextLiveState: nextLiveAtJotunheim,
      nextLivesStart: nextUpStart,
      liveShowsAtm: isFoofestLive,
    });
  }

  return (
    <div className="layout-wrapper">
      <TopNav setLogin={setLogin} login={login} />

      {login === false ? (
        <LoginPage setLogin={setLogin} login={login} />
      ) : (
        <Outlet
          context={{
            schedule: [scheduledBands, setScheduledBands],
            live: [liveNow, setLiveNow],
            date: [dateNow, setdateNow],
          }}
        />
      )}

      <BottomNav />
    </div>
  );
}

export default App;
