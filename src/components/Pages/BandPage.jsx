import React, { useState } from "react";
import BandCard from "../Reusable components/BandCard";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function BandPage(props) {
  //using this const to render the see more in the band card in the list view but not on the band page view
  const page = "bandPage";
  //have to use location to pass data from the link to the page
  const location = useLocation();
  //location as current band
  const currentBand = location.state;
  const [bandDisplayed, setBandDisplayed] = useState({
    name: "",
    members: [],
    genre: "",
    logoCredits: "",
    logo: "",
    bio: "",
  });

  //fetching detailed bands data
  useEffect(() => {
    async function getBands() {
      const res = await fetch("http://localhost:8080/bands");
      const bands = await res.json();
      // setScheduledBands(schedule);
      console.log(bands);
      //define the corresponding band that has to be displayed
      defineBand(bands);
    }
    getBands();
  }, []);

  function defineBand(bands) {
    //filtering to find the band with the same name as the current one in the path
    const bandOnDisplay = bands.filter((band) => band.name === currentBand);
    //setting the band
    setBandDisplayed({ name: bandOnDisplay[0].name, members: bandOnDisplay[0].members, genre: bandOnDisplay[0].genre, logoCredits: bandOnDisplay[0].logoCredits, logo: bandOnDisplay[0].logo, bio: bandOnDisplay[0].bio });
  }

  return (
    <section id="singleBandPage">
      <h1>{bandDisplayed.name}</h1>
      <div className="single-band-content">
        <img src={bandDisplayed.logo} alt={bandDisplayed.logoCredits} />
        <p>{bandDisplayed.bio}</p>
        <p>
          Genre : <span>{bandDisplayed.genre}</span>
        </p>
        <div className="members-section">
          <p> Members :</p>
          <ul className="members-list" aria-label="Members:">
            {bandDisplayed.members.map((member) => {
              return <li key={member}>{member}</li>;
            })}
          </ul>
        </div>
        <div className="live-next">
          <h3>
            See <span>{bandDisplayed.name}</span> live:
          </h3>
          <h4>Tuesday, July 18th</h4>
          <BandCard page={page} />
        </div>
      </div>
    </section>
  );
}

export default BandPage;
