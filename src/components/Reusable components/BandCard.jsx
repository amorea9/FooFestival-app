import React from "react";
import { Link, useNavigate } from "react-router-dom";
import emptyHeart from "../../media/favourites-empty.svg";
import orangeArrow from "../../media/right-orange-arrow.svg";
function BandCard(props) {
  //navigate allows us to pass a path and a state (data) through the link to a different route
  const navigate = useNavigate();
  const toBandPage = () => {
    navigate(`/band-page/${props.bandName === "AC/DC" ? "ACDC" : props.bandName}`, { state: props.bandName });
  };

  return (
    // <Link
    //   className="band-card"
    //   to={{
    //     pathname: `/band-page/${props.bandName}`,
    //     state: props.bandName,
    //   }}
    // >
    <a className="band-card" onClick={() => toBandPage()}>
      <h3>{props.bandName}</h3>
      <div className="band-card-content">
        <div className="band-card-main-content">
          <p>Stage {props.stage}</p>
          <p> {props.day} </p>
          <p>
            {props.start} - {props.end}
          </p>
        </div>
        <div className="band-card-side-content">
          <img className="empty-heart-icon" src={emptyHeart} alt="empty heart icon" />
        </div>
      </div>
      {props.page === "bandPage" ? null : (
        <div className="read-more-btn-container">
          <p className="read-more-btn">
            Read more <img className="bi-arrow-right" src={orangeArrow} alt="orange arrow icon" />
          </p>
        </div>
      )}
    </a>
  );
}

export default BandCard;
