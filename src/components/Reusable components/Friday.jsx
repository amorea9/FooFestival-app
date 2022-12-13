import BandCard from "./BandCard";

function Friday(props) {
  return (
    <>
      <h2>Friday, July 21st</h2>
      <div className="bands-list-wrapper">
        {props.allStagesFriday.map((show) => {
          return show.act != "break" ? (
            <BandCard key={show.act} start={show.start} end={show.end} stage={props.allStagesFriday.indexOf(show) <= 12 ? "Jotunheim" : props.allStagesFriday.indexOf(show) <= 24 ? "Midgard" : "Vanaheim"} bandName={show.act} />
          ) : null;
        })}
      </div>
    </>
  );
}

export default Friday;
