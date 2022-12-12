import React from "react";

function PlayingNow(props) {
  if (props.liveNow.liveShowsAtm === false) {
    return (
      <article id="playingNow" className="playing-now-comp">
        <h2>
          Playing now <span> </span>
        </h2>
        <div className="playing-now-none">
          <article>
            <h3>Currently there is no live acts</h3>
            <p>The next live acts will begin at 16:00 at all stages</p>
          </article>
        </div>
      </article>
    );
  } else {
    return (
      <article id="playingNow" className="playing-now-comp">
        <h2>
          Playing now <span> </span>
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
}

export default PlayingNow;
