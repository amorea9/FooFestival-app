import React from "react";
import BandCard from "../Reusable components/BandCard";
import { useEffect } from "react";

function BandPage(props) {
  //using this const to render the see more in the band card in the list view but not on the band page view
  const page = "bandPage";

  //fetching detailed bands data

  useEffect(() => {
    async function getBands() {
      const res = await fetch("http://localhost:8080/bands");
      const bands = await res.json();
      // setScheduledBands(schedule);
      console.log(bands);
      //call the function every minute
    }
    getBands();
  }, []);
  return (
    <section id="singleBandPage">
      <h1>Metallica</h1>
      <div className="single-band-content">
        <img src="http://placekitten.com/400/300" alt="band image" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis alias mollitia repudiandae unde deserunt voluptatibus quod, laborum quaerat accusantium tempora enim error sit ut fugit nobis ducimus, itaque dolores? Ipsa.</p>
        <p>
          Genre : <span>Rock</span>
        </p>
        <div className="members-section">
          <p> Members :</p>
          <ul className="members-list" aria-label="Members:">
            <li>Gareth</li>
            <li>Rei</li>
            <li>Maria</li>
            <li>Alessia</li>
          </ul>
        </div>
        <div className="live-next">
          <h3>
            See <span>Metallica</span> live:
          </h3>
          <h4>Tuesday, July 18th</h4>
          <BandCard page={page} />
        </div>
      </div>
    </section>
  );
}

export default BandPage;
