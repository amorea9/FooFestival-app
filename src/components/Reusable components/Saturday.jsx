import BandCard from "./BandCard";

function Saturday(props) {
  let jotunheimSaturday = Object.values(props.scheduledBands.Jotunheim.tue);
  let midgardSaturday = Object.values(props.scheduledBands.Midgard.tue);
  let vanaheimSaturday = Object.values(props.scheduledBands.Vanaheim.tue);

  let allStagesSaturday = jotunheimSaturday.concat(midgardSaturday, vanaheimSaturday);

  return (
    <>
      <h2>Saturday, July 22nd</h2>
      <div className="bands-list-wrapper">
        {allStagesSaturday.map((show) => {
          return show.act != "break" ? (
            <BandCard key={show.act} start={show.start} end={show.end} stage={allStagesSaturday.indexOf(show) <= 12 ? "Jotunheim" : allStagesSaturday.indexOf(show) <= 24 ? "Midgard" : "Vanaheim"} bandName={show.act} />
          ) : null;
        })}
      </div>
    </>
  );
}

export default Saturday;
