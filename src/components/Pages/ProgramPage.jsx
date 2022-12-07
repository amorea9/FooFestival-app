import React from "react";
import BandsList from "../Reusable components/BandsList";
import DayFiltering from "../Reusable components/DayFiltering";
import StageFiltering from "../Reusable components/StageFiltering";

function Program() {
  return (
    <div>
      <h1>Program 2023</h1>
      <div className="filter-nav">
        <label htmlFor="days">Filter by: </label>
        <DayFiltering />
        <StageFiltering />
        <p>search icon here</p>
        <BandsList />
        <BandsList />
        <BandsList />
      </div>
    </div>
  );
}

export default Program;
