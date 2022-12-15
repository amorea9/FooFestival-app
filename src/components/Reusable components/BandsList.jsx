import BandCard from "./BandCard";

function BandsList(props) {
  console.log("filtered List from band list", props.filteredList);
  return (
    <div className="bands-list">
      {props.filter.day === "Monday" ? <h2>Monday, July 17th</h2> : null}
      {props.filter.day === "Tuesday" ? <h2>Tuesday, July 18th</h2> : null}
      {props.filter.day === "Wednesday" ? <h2>Wednesday, July 19th</h2> : null}
      {props.filter.day === "Thursday" ? <h2>Thursday, July 20th</h2> : null}
      {props.filter.day === "Friday" ? <h2>Friday, July 21st</h2> : null}
      {props.filter.day === "Saturday" ? <h2>Saturday, July 22nd</h2> : null}
      {props.filter.day === "Sunday" ? <h2>Sunday, July 23rd</h2> : null}
      {props.filter.stage === "Midgard" && props.filter.day === "all" ? <h2>Midgard</h2> : null}
      {props.filter.stage === "Vanaheim" && props.filter.day === "all" ? <h2>Vanaheim</h2> : null}
      {props.filter.stage === "Jotunheim" && props.filter.day === "all" ? <h2>Jotunheim</h2> : null}
      {props.filter.stage === "all" && props.filter.day === "all" ? <h2>Full lineup</h2> : null}
      <div className="bands-list-wrapper">
        {props.filteredList.map((show) => {
          return show.act != "break" ? <BandCard key={show.act} start={show.start} end={show.end} stage={show.stage} day={show.day} bandName={show.act} /> : null;
        })}
      </div>{" "}
    </div>
  );
}

export default BandsList;
