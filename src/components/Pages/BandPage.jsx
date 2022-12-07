import React from "react";
import BandCard from "../Reusable components/BandCard";

function BandPage() {
  return (
    <div>
      <h1>Metallica</h1>
      <img src="http://placekitten.com/200/300" alt="band image" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis alias mollitia repudiandae unde deserunt voluptatibus quod, laborum quaerat accusantium tempora enim error sit ut fugit nobis ducimus, itaque dolores? Ipsa.</p>
      <p>
        Genre : <span>Rock</span>
      </p>
      <ul>
        Members :<li>Gareth</li>
        <li>Rei</li>
        <li>Maria</li>
        <li>Alessia</li>
      </ul>
      <div className="live-next">
        <h3>See Metallica live:</h3>
        <p>Tuesday, July 18th</p>
        <BandCard />
      </div>
    </div>
  );
}

export default BandPage;
