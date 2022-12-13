import BandCard from "./BandCard";

function Monday(props) {
  console.log("scheduleByDays", props.scheduleByDays);
  return (
    <>
      {/* <h2>Monday, July 17th</h2>
      <div className="bands-list-wrapper">
        {props.scheduleByDays.monday.map((show) => {
          return show.act != "break" ? (
            <BandCard key={show.act} start={show.start} end={show.end} stage={props.scheduleByDays.monday.indexOf(show) <= 12 ? "Jotunheim" : props.scheduleByDays.monday.indexOf(show) <= 24 ? "Midgard" : "Vanaheim"} bandName={show.act} />
          ) : null;
        })}
      </div> */}
    </>
  );
}

export default Monday;
