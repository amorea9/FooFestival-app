import BandCard from "./BandCard";

function Thursday(props) {
  let jotunheimThursday = Object.values(props.scheduledBands.Jotunheim.tue);
  let midgardThursday = Object.values(props.scheduledBands.Midgard.tue);
  let vanaheimThursday = Object.values(props.scheduledBands.Vanaheim.tue);

  let allStagesThursday = jotunheimThursday.concat(midgardThursday, vanaheimThursday);

  return (
    <>
      <h2>Thursday, July 20th</h2>
      <div className="bands-list-wrapper">
        {allStagesThursday.map((show) => {
          return show.act != "break" ? (
            <BandCard key={show.act} start={show.start} end={show.end} stage={allStagesThursday.indexOf(show) <= 12 ? "Jotunheim" : allStagesThursday.indexOf(show) <= 24 ? "Midgard" : "Vanaheim"} bandName={show.act} />
          ) : null;
        })}
      </div>
    </>
  );
}

export default Thursday;
