import Friday from "./Friday";
import Monday from "./Monday";
import Thursday from "./Thursday";
import Tuesday from "./Tuesday";
import Wednesday from "./Wednesday";
import Saturday from "./Saturday";
import Sunday from "./Sunday";
function BandsList(props) {
  console.log("scheduleByDays", props.scheduleByDays);
  return (
    <div className="bands-list">
      <Monday scheduleByDays={props.scheduleByDays} />
      {/* <Tuesday scheduleByDays={props.scheduleByDays} />
      <Wednesday scheduleByDays={props.scheduleByDays} />
      <Thursday scheduleByDays={props.scheduleByDays} />
      <Friday scheduleByDays={props.scheduleByDays} />
      <Saturday scheduleByDays={props.scheduleByDays} />
      <Sunday scheduleByDays={props.scheduleByDays} /> */}
    </div>
  );
}

export default BandsList;
