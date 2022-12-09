import BandPage from "./components/Pages/BandPage";
import FavouritesPage from "./components/Pages/FavouritesPage";
import LandingPage from "./components/Pages/LandingPage";
import LoginPage from "./components/Pages/LoginPage";
import ProgramPage from "./components/Pages/ProgramPage";
import BottomNav from "./components/Reusable components/BottomNav";
import { useEffect, useState } from "react";
import "./index.scss";

function App() {
  const [liveNow, setLiveNow] = useState({
    jotunheimLiveState: "",
    midgardLiveState: "",
    vanaheimLiveState: "",
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
    console.log("day of the week:", day);
    //update state with current day of the week
    setdateNow({ ...dateNow, today: day });

    //find current time in hours and minutes
    const currentTime = now.getHours() + ":" + now.getMinutes();

    //find bands playing at Jotunheim
    const playingAtJotunheim = schedule.Jotunheim;
    const playingAtMidgard = schedule.Midgard;
    const playingAtVanaheim = schedule.Vanaheim;
    //outputs an array where each day is presented as an index
    let jotunheimByDays = Object.values(playingAtJotunheim);
    let midgardByDays = Object.values(playingAtMidgard);
    let vanaheimByDays = Object.values(playingAtVanaheim);

    //because objvalues starts from a 0 based index we assign variable where day = objDay
    let objDay = day - 1;

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
      }
      setLiveNow({
        ...liveNow,
        vanaheimLiveState: liveAtVanaheim,
        midgardLiveState: liveAtMidgard,
        jotunheimLiveState: liveAtJotunheim,
      });
    });
  }
  return (
    <div className="layout-wrapper">
      <nav className="top-nav">
        <ul>
          <li>logo here</li>
          <li>FOOFEST</li>
          <li>en/dk</li>
        </ul>
      </nav>
      <LandingPage liveNow={liveNow} />
      <ProgramPage />
      <FavouritesPage />
      <BandPage />
      <BottomNav />
    </div>
  );
}

export default App;
