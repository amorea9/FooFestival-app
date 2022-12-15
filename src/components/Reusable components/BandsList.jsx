import BandCard from "./BandCard";

function BandsList(props) {
  console.log("filtered List from band list", props.filteredList);
  return (
    <div className="bands-list">
      {props.filter === "monday" ? <h2>Monday, July 17th</h2> : null}
      {props.filter === "tuesday" ? <h2>Tuesday, July 18th</h2> : null}
      {props.filter === "wednesday" ? <h2>Wednesday, July 19th</h2> : null}
      {props.filter === "thursday" ? <h2>Thursday, July 20th</h2> : null}
      {props.filter === "friday" ? <h2>Friday, July 21st</h2> : null}
      {props.filter === "saturday" ? <h2>Saturday, July 22nd</h2> : null}
      {props.filter === "sunday" ? <h2>Sunday, July 23rd</h2> : null}
      {props.filter === "all" ? <h2>Full lineup</h2> : null}

      <div className="bands-list-wrapper">
        {props.filteredList.map((show) => {
          return show.act != "break" ? (
            <BandCard key={show.act} start={show.start} end={show.end} stage={props.filteredList.indexOf(show) <= 12 ? "Jotunheim" : props.filteredList.indexOf(show) <= 24 ? "Midgard" : "Vanaheim"} bandName={show.act} />
          ) : null;
        })}
      </div>

      {/*       
      <Monday filteredList={props.filteredList} filter={props.filter} /> */}
      {/* <Tuesday filteredList={props.filteredList} filter={props.filter} /> */}
      {/* <Wednesday filteredList={props.filteredList} />
      <Thursday filteredList={props.filteredList} />
      <Friday filteredList={props.filteredList} />
      <Saturday filteredList={props.filteredList} />
      <Sunday filteredList={props.filteredList} /> */}
    </div>
  );
}

export default BandsList;
