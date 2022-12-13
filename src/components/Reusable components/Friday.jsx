import BandCard from "./BandCard";

function Friday(props) {
  let jotunheimFriday = Object.values(props.scheduledBands.Jotunheim.tue);
  let midgardFriday = Object.values(props.scheduledBands.Midgard.tue);
  let vanaheimFriday = Object.values(props.scheduledBands.Vanaheim.tue);

  let allStagesFriday = jotunheimFriday.concat(midgardFriday, vanaheimFriday);

  return (
    <>
      <h2>Friday, July 21st</h2>
      <div className="bands-list-wrapper">
        {allStagesFriday.map((show) => {
          return show.act != "break" ? <BandCard key={show.act} start={show.start} end={show.end} stage={allStagesFriday.indexOf(show) <= 12 ? "Jotunheim" : allStagesFriday.indexOf(show) <= 24 ? "Midgard" : "Vanaheim"} bandName={show.act} /> : null;
        })}
      </div>
    </>
  );
}

export default Friday;
