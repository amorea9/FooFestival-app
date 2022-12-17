import { Link } from "react-router-dom";
import orangeArrow from "../../media/right-orange-arrow.svg";
function Schedule() {
  return (
    <article className="schedule-comp">
      {" "}
      <h2>Schedule 2023</h2>
      <p>Check out the full schedule and see when and where your favourite bands are playing.</p>
      <div className="button-container">
        <Link className="primary-button" to={"/program-page#top"}>
          Schedule <img className="bi-arrow-right" src={orangeArrow} alt="orange arrow icon" />
        </Link>
      </div>
    </article>
  );
}

export default Schedule;
