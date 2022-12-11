function PlayingNow(props) {
  //TODO: if the schedule is on a break display: "No live acts at the moment. Next live acts start at 16:00"
  if (props.liveNow.liveShowsAtm === false) {
    return (
      <section className="playing-now-comp">
        <h2>
          Playing now <span> .</span>
        </h2>
        <div className="playing-now-none">
          <article>
            <h3>Currently there is no live acts</h3>
            <p>The next live acts will begin at 16:00 at all stages</p>
          </article>
        </div>
      </section>
    );
  } else {
    return (
      <section className="playing-now-comp">
        <h2>
          Playing now <span> .</span>
        </h2>
        <div className="playing-now-content">
          <article className="playing-now-band">
            <h3>{props.liveNow.jotunheimLiveState}</h3>
            <p>Jotunheim stage</p>
          </article>
          <article className="playing-now-band">
            <h3>{props.liveNow.midgardLiveState}</h3>
            <p>Midgard stage</p>
          </article>
          <article className="playing-now-band">
            <h3>{props.liveNow.vanaheimLiveState}</h3>
            <p>Vanaheim stage</p>
          </article>
        </div>
      </section>
    );
  }
}

export default PlayingNow;
