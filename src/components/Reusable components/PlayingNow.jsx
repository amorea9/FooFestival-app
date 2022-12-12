function PlayingNow(props) {
  if (props.liveNow.liveShowsAtm === false) {
    return (
      <article id="playingNow" className="playing-now-comp">
        <h2>
          Playing now <span>.</span>
        </h2>
        <div className="playing-now-none">
          <article>
            <h3>Currently there is no live acts</h3>
            <p>The next live acts will begin at {props.liveNow.nextLivesStart}</p>
          </article>
        </div>
      </article>
    );
  } else {
    return (
      <article id="playingNow" className="playing-now-comp">
        <h2 className="playing-now-headline">
          Playing now <span>.</span>
        </h2>
        <div className="playing-now-content">
          <article className="playing-now-band">
            <h3>{props.liveNow.jotunheimLiveState}</h3>
            <p>At stage Jotunheim</p>
            <p>
              Next up: {props.liveNow.jotunheimNextLiveState}
              <span> at {props.liveNow.nextLivesStart}</span>
            </p>
          </article>
          <article className="playing-now-band">
            <h3>{props.liveNow.midgardLiveState}</h3>
            <p>At stage Midagrd</p>
            <p>
              Next up: {props.liveNow.midgardNextLiveState}
              <span> at {props.liveNow.nextLivesStart}</span>
            </p>
          </article>
          <article className="playing-now-band">
            <h3>{props.liveNow.vanaheimLiveState}</h3>
            <p>At stage Vanaheim</p>
            <p>
              Next up: {props.liveNow.vanaheimNextLiveState}
              <span> at {props.liveNow.nextLivesStart}</span>
            </p>
          </article>
        </div>
      </article>
    );
  }
}

export default PlayingNow;
