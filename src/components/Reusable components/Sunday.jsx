import BandCard from "./BandCard";

function Sunday(props) {
  let jotunheimSunday = Object.values(props.scheduledBands.Jotunheim.tue);
  let midgardSunday = Object.values(props.scheduledBands.Midgard.tue);
  let vanaheimSunday = Object.values(props.scheduledBands.Vanaheim.tue);

  let allStagesSunday = jotunheimSunday.concat(midgardSunday, vanaheimSunday);

  return (
    <>
      <h2>Sunday, July 23rd</h2>
      <div className="bands-list-wrapper">
        {allStagesSunday.map((show) => {
          return show.act != "break" ? <BandCard key={show.act} start={show.start} end={show.end} stage={allStagesSunday.indexOf(show) <= 12 ? "Jotunheim" : allStagesSunday.indexOf(show) <= 24 ? "Midgard" : "Vanaheim"} bandName={show.act} /> : null;
        })}
      </div>
    </>
  );
}

export default Sunday;
