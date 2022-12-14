import BandCard from "./BandCard";

function Thursday(props) {
  return (
    <>
      <h2>Thursday, July 20th</h2>
      <div className="bands-list-wrapper">
        {props.scheduleByDays.thursday.map((show) => {
          return show.act != "break" ? (
            <BandCard
              key={show.act}
              start={show.start}
              end={show.end}
              stage={
                props.scheduleByDays.thursday.indexOf(show) <= 12
                  ? "Jotunheim"
                  : props.scheduleByDays.thursday.indexOf(show) <= 24
                  ? "Midgard"
                  : "Vanaheim"
              }
              bandName={show.act}
            />
          ) : null;
        })}
      </div>
    </>
  );
}

export default Thursday;
