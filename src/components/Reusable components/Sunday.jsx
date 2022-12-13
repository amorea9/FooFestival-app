import BandCard from "./BandCard";

function Sunday(props) {
  return (
    <>
      <h2>Sunday, July 23rd</h2>
      <div className="bands-list-wrapper">
        {props.allStagesSunday.map((show) => {
          return show.act != "break" ? (
            <BandCard key={show.act} start={show.start} end={show.end} stage={props.allStagesSunday.indexOf(show) <= 12 ? "Jotunheim" : props.allStagesSunday.indexOf(show) <= 24 ? "Midgard" : "Vanaheim"} bandName={show.act} />
          ) : null;
        })}
      </div>
    </>
  );
}

export default Sunday;
