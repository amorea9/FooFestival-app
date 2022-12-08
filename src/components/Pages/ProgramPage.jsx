import React from "react";
import BandsList from "../Reusable components/BandsList";
import DayFiltering from "../Reusable components/DayFiltering";
import StageFiltering from "../Reusable components/StageFiltering";
import searchIcon from "../../media/search-icon.svg";

function Program() {
  return (
    <section className="program-page">
      <h1>Program 2023</h1>
      <label htmlFor="filters-nav">Filter by: </label>
      <div id="filtersNav">
        <DayFiltering />
        <StageFiltering />
        <img src={searchIcon} alt="search icon" />
      </div>

      <input id="searchField" className="hidden" type="text" />
      <div className="bands-list-wrapper">
        <BandsList />
        <BandsList />
      </div>
    </section>
  );
}

export default Program;
