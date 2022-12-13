import BandCard from "./BandCard";

function Wednesday(props) {
  let jotunheimWednesday = Object.values(props.scheduledBands.Jotunheim.tue);
  let midgardWednesday = Object.values(props.scheduledBands.Midgard.tue);
  let vanaheimWednesday = Object.values(props.scheduledBands.Vanaheim.tue);

  let allStagesWednesday = jotunheimWednesday.concat(midgardWednesday, vanaheimWednesday);

  return (
    <>
      <h2>Wednesday, July 19th</h2>
      <div className="bands-list-wrapper">
        {allStagesWednesday.map((show) => {
          return show.act != "break" ? (
            <BandCard key={show.act} start={show.start} end={show.end} stage={allStagesWednesday.indexOf(show) <= 12 ? "Jotunheim" : allStagesWednesday.indexOf(show) <= 24 ? "Midgard" : "Vanaheim"} bandName={show.act} />
          ) : null;
        })}
      </div>
    </>
  );
}

export default Wednesday;
