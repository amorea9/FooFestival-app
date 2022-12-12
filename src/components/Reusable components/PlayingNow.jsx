import React from "react";

function PlayingNow(props) {
  return (
    <article id="playingNow" className="playing-now-comp">
      <h2>
        Playing now <span> .</span>
      </h2>
      <div className="playing-now-content">
        <article className="playing-now-band">
          <h3>{props.liveNow.jotunheimLiveState}</h3>
          <p>Jotunheim stage</p>
        </article>
        <article className="playing-now-band">
          <h4>{props.liveNow.midgardLiveState}</h4>
          <p>Midgard stage</p>
        </article>
        <article className="playing-now-band">
          <p>{props.liveNow.vanaheimLiveState}</p>
          <p>Vanaheim stage</p>
        </article>
      </div>
    </article>
  );
}

export default PlayingNow;
