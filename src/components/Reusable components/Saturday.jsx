import BandCard from "./BandCard";

function Saturday(props) {
  return (
    <>
      <h2>Saturday, July 22nd</h2>
      <div className="bands-list-wrapper">
        {props.allStagesSaturday.map((show) => {
          return show.act != "break" ? (
            <BandCard key={show.act} start={show.start} end={show.end} stage={props.allStagesSaturday.indexOf(show) <= 12 ? "Jotunheim" : props.allStagesSaturday.indexOf(show) <= 24 ? "Midgard" : "Vanaheim"} bandName={show.act} />
          ) : null;
        })}
      </div>
    </>
  );
}

export default Saturday;
