import React from "react";

function PlayingNow() {
  return (
    <section className="playing-now-comp">
      <h2>
        Playing now <span> .</span>
      </h2>
      <div className="playing-now-content">
        <article className="playing-now-band">
          <h3>Metallica</h3>
          <p>Stage here</p>
        </article>
        <article className="playing-now-band">
          <h4>Metallica</h4>
          <p>Stage here</p>
        </article>
        <article className="playing-now-band">
          <p>Metallica</p>
          <p>Stage here</p>
        </article>
      </div>
    </section>
  );
}

export default PlayingNow;
