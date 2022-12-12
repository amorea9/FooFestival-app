import BandCard from "./BandCard";

function Tuesday(props) {
  let jotunheimTuesday = Object.values(props.scheduledBands.Jotunheim.tue);
  let midgardTuesday = Object.values(props.scheduledBands.Midgard.tue);
  let vanaheimTuesday = Object.values(props.scheduledBands.Vanaheim.tue);
  return (
    <>
      <h2>Tuesday, July 17th</h2>
      <div className="bands-list-wrapper">
        {jotunheimTuesday.map((show) => {
          return show.act != "break" ? <BandCard key={show.act} start={show.start} end={show.end} stage={"Jotunheim"} bandName={show.act} /> : null;
        })}
        {midgardTuesday.map((show) => {
          return show.act != "break" ? <BandCard key={show.act} start={show.start} end={show.end} stage={"Midgard"} bandName={show.act} /> : null;
        })}
        {vanaheimTuesday.map((show) => {
          return show.act != "break" ? <BandCard key={show.act} start={show.start} end={show.end} stage={"Vanaheim"} bandName={show.act} /> : null;
        })}{" "}
      </div>
    </>
  );
}

export default Tuesday;
