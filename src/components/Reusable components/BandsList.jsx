import Monday from "./Monday";
import Tuesday from "./Tuesday";
function BandsList(props) {
  //bands playing by days at each stage

  return (
    <div className="bands-list">
      <Monday scheduledBands={props.scheduledBands} />
      <Tuesday scheduledBands={props.scheduledBands} />
    </div>
  );
}

export default BandsList;
