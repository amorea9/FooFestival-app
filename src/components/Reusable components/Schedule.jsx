import { Link } from "react-router-dom";
function Schedule() {
  return (
    <article className="schedule-comp">
      {" "}
      <h2>Schedule 2023</h2>
      <p>Check out the full schedule and see when and where your favourite bands are playing.</p>
      <Link to={"/program-page"}>See the schedule</Link>
    </article>
  );
}

export default Schedule;
