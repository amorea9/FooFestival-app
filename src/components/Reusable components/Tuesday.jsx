import BandCard from "./BandCard";

function Tuesday(props) {
  let jotunheimTuesday = Object.values(props.scheduledBands.Jotunheim.tue);
  let midgardTuesday = Object.values(props.scheduledBands.Midgard.tue);
  let vanaheimTuesday = Object.values(props.scheduledBands.Vanaheim.tue);

  let allStagesTuesday = jotunheimTuesday.concat(midgardTuesday, vanaheimTuesday);

  return (
    <>
      <h2>Tuesday, July 18th</h2>
      <div className="bands-list-wrapper">
        {allStagesTuesday.map((show) => {
          return show.act != "break" ? (
            <BandCard key={show.act} start={show.start} end={show.end} stage={allStagesTuesday.indexOf(show) <= 12 ? "Jotunheim" : allStagesTuesday.indexOf(show) <= 24 ? "Midgard" : "Vanaheim"} bandName={show.act} />
          ) : null;
        })}
      </div>
    </>
  );
}

export default Tuesday;
