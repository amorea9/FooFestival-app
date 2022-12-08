import BandPage from "./components/Pages/BandPage";
import FavouritesPage from "./components/Pages/FavouritesPage";
import LandingPage from "./components/Pages/LandingPage";
import LoginPage from "./components/Pages/LoginPage";
import ProgramPage from "./components/Pages/ProgramPage";
import BottomNav from "./components/Reusable components/BottomNav";
import { useEffect, useState } from "react";
import "./index.scss";

function App() {
  const [liveNow, setLiveNow] = useState([]);
  useEffect(() => {
    async function getSchedule() {
      const res = await fetch("http://localhost:8080/schedule");
      const schedule = await res.json();
      console.log(schedule);
      findLiveBands(schedule);
    }
    getSchedule();
  }, []);
  function findLiveBands(data) {
    const schedule = data;
    const now = new Date();
    //find day of the week
    const day = now.getDay();
    console.log("day of the week:", day);

    //find current time in hours and minutes
    const currentTime = now.getHours() + ":" + now.getMinutes();
    console.log("currentTime is", currentTime);

    //find bands playing at Jotunheim
    const playingAtJotunheim = schedule.Jotunheim;
    //outputs an array where each day is presented as an index
    let objValues = Object.values(playingAtJotunheim);
    //console.log("objValues:", objValues);

    if (day === 4) {
      console.log("Today is Thursday");
      let todayAtJotunheim = objValues[3];
      //console.log(todayAtJotunheim);
      todayAtJotunheim.forEach((show) => {
        todayAtJotunheim = show.act;
        let showStart = show.start;
        let showEnd = show.end;
        //find the act that is live now
        if (todayAtJotunheim != "break" && currentTime > showStart && currentTime < showEnd) {
          let liveAtJotunheim = show.act;
          console.log("Live at Jotunheim:", liveAtJotunheim);
        }
      });
    }
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
      <LandingPage />
      <ProgramPage />
      <FavouritesPage />
      <BandPage />
      <BottomNav />
    </div>
  );
}

export default App;
