import BandCard from "./BandCard";

function Monday(props) {
  let jotunheimMonday = Object.values(props.scheduledBands.Jotunheim.mon);
  let midgardMonday = Object.values(props.scheduledBands.Midgard.mon);
  let vanaheimMonday = Object.values(props.scheduledBands.Vanaheim.mon);
  return (
    <>
      <h2>Monday, July 17th</h2>
      <div className="bands-list-wrapper">
        {jotunheimMonday.map((show) => {
          return show.act != "break" ? <BandCard key={show.act} start={show.start} end={show.end} stage={"Jotunheim"} bandName={show.act} /> : null;
        })}
        {midgardMonday.map((show) => {
          return show.act != "break" ? <BandCard key={show.act} start={show.start} end={show.end} stage={"Midgard"} bandName={show.act} /> : null;
        })}
        {vanaheimMonday.map((show) => {
          return show.act != "break" ? <BandCard key={show.act} start={show.start} end={show.end} stage={"Vanaheim"} bandName={show.act} /> : null;
        })}{" "}
      </div>
    </>
  );
}

export default Monday;
