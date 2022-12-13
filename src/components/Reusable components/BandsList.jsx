import Friday from "./Friday";
import Monday from "./Monday";
import Thursday from "./Thursday";
import Tuesday from "./Tuesday";
import Wednesday from "./Wednesday";
import Saturday from "./Saturday";
import Sunday from "./Sunday";
function BandsList(props) {
  //bands playing by days at each stage

  return (
    <div className="bands-list">
      <Monday scheduledBands={props.scheduledBands} />
      <Tuesday scheduledBands={props.scheduledBands} />
      <Wednesday scheduledBands={props.scheduledBands} />
      <Thursday scheduledBands={props.scheduledBands} />
      <Friday scheduledBands={props.scheduledBands} />
      <Saturday scheduledBands={props.scheduledBands} />
      <Sunday scheduledBands={props.scheduledBands} />
    </div>
  );
}

export default BandsList;
