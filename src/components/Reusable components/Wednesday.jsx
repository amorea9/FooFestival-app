import BandCard from "./BandCard";

function Wednesday(props) {
  return (
    <>
      <h2>Wednesday, July 19th</h2>
      <div className="bands-list-wrapper">
        {props.allStagesWednesday.map((show) => {
          return show.act != "break" ? (
            <BandCard key={show.act} start={show.start} end={show.end} stage={props.allStagesWednesday.indexOf(show) <= 12 ? "Jotunheim" : props.allStagesWednesday.indexOf(show) <= 24 ? "Midgard" : "Vanaheim"} bandName={show.act} />
          ) : null;
        })}
      </div>
    </>
  );
}

export default Wednesday;
