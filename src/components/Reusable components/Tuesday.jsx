import BandCard from "./BandCard";

function Tuesday(props) {
  return (
    <>
      <h2>Tuesday, July 18th</h2>
      <div className="bands-list-wrapper">
        {props.scheduleByDays.tuesday.map((show) => {
          return show.act != "break" ? (
            <BandCard key={show.act} start={show.start} end={show.end} stage={props.scheduleByDays.tuesday.indexOf(show) <= 12 ? "Jotunheim" : props.scheduleByDays.tuesday.indexOf(show) <= 24 ? "Midgard" : "Vanaheim"} bandName={show.act} />
          ) : null;
        })}
      </div>
    </>
  );
}

export default Tuesday;
