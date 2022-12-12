import React from "react";
import BandsList from "../Reusable components/BandsList";
import DayFiltering from "../Reusable components/DayFiltering";
import StageFiltering from "../Reusable components/StageFiltering";
import searchIcon from "../../media/search-icon.svg";
import { useOutletContext } from "react-router-dom";

function Program(props) {
  const {
    schedule: [scheduledBands, setScheduledBands],
  } = useOutletContext();

  // console.log("monday", playingMonday);

  // console.log("schedule", scheduledBands);
  return (
    <section className="program-page">
      <h1>Program 2023</h1>
      <label htmlFor="filters-nav">Filter by: </label>
      <div id="filtersNav">
        <DayFiltering />
        <StageFiltering />
      </div>
      <div className="search-nav">
        <input id="searchField" type="text" placeholder="search here" />
        <img className="search-icon" src={searchIcon} alt="search icon" />
      </div>

      <div className="bands-list-wrapper">
        <BandsList scheduledBands={scheduledBands} />
      </div>
    </section>
  );
}

export default Program;
