import React from "react";
import BandsList from "../Reusable components/BandsList";
import DayFiltering from "../Reusable components/DayFiltering";
import StageFiltering from "../Reusable components/StageFiltering";

function Program() {
  return (
    <div>
      <h1>Program 2023</h1>
      <label htmlFor="filters-nav">Filter by: </label>
      <div id="filters-nav">
        <DayFiltering />
        <StageFiltering />
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className=" search-icon bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </div>

      <input className="hidden" type="text" />
      <div className="bands-list-wrapper">
        <BandsList />
        <BandsList />
      </div>
    </div>
  );
}

export default Program;
