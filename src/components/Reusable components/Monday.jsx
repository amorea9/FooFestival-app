import BandCard from "./BandCard";

function Monday(props) {
  let jotunheimMonday = Object.values(props.scheduledBands.Jotunheim.mon);
  let midgardMonday = Object.values(props.scheduledBands.Midgard.mon);
  let vanaheimMonday = Object.values(props.scheduledBands.Vanaheim.mon);

  let allStagesMonday = jotunheimMonday.concat(midgardMonday, vanaheimMonday);

  return (
    <>
      <h2>Monday, July 17th</h2>
      <div className="bands-list-wrapper">
        {allStagesMonday.map((show) => {
          return show.act != "break" ? <BandCard key={show.act} start={show.start} end={show.end} stage={allStagesMonday.indexOf(show) <= 12 ? "Jotunheim" : allStagesMonday.indexOf(show) <= 24 ? "Midgard" : "Vanaheim"} bandName={show.act} /> : null;
        })}
      </div>
    </>
  );
}

export default Monday;
