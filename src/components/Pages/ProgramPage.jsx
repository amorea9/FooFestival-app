import React, { useEffect } from "react";
import BandsList from "../Reusable components/BandsList";
import DayFiltering from "../Reusable components/DayFiltering";
import StageFiltering from "../Reusable components/StageFiltering";
import searchIcon from "../../media/search-icon.svg";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";

function Program(props) {
  const {
    schedule: [scheduledBands, setScheduledBands],
  } = useOutletContext();

  const [scheduleByDays, setScheduleByDays] = useState({
    monday: [],
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: "",
  });
  //bands playing by days at each stage
  //monday
  let jotunheimMonday = Object.values(scheduledBands.Jotunheim.mon);
  let midgardMonday = Object.values(scheduledBands.Midgard.mon);
  let vanaheimMonday = Object.values(scheduledBands.Vanaheim.mon);
  let allStagesMonday = jotunheimMonday.concat(midgardMonday, vanaheimMonday);

  // tuesday
  let jotunheimTuesday = Object.values(scheduledBands.Jotunheim.tue);
  let midgardTuesday = Object.values(scheduledBands.Midgard.tue);
  let vanaheimTuesday = Object.values(scheduledBands.Vanaheim.tue);
  let allStagesTuesday = jotunheimTuesday.concat(midgardTuesday, vanaheimTuesday);
  //wednesday
  let jotunheimWednesday = Object.values(scheduledBands.Jotunheim.tue);
  let midgardWednesday = Object.values(scheduledBands.Midgard.tue);
  let vanaheimWednesday = Object.values(scheduledBands.Vanaheim.tue);
  let allStagesWednesday = jotunheimWednesday.concat(midgardWednesday, vanaheimWednesday);
  //thursday
  let jotunheimThursday = Object.values(scheduledBands.Jotunheim.tue);
  let midgardThursday = Object.values(scheduledBands.Midgard.tue);
  let vanaheimThursday = Object.values(scheduledBands.Vanaheim.tue);
  let allStagesThursday = jotunheimThursday.concat(midgardThursday, vanaheimThursday);
  //friday
  let jotunheimFriday = Object.values(scheduledBands.Jotunheim.tue);
  let midgardFriday = Object.values(scheduledBands.Midgard.tue);
  let vanaheimFriday = Object.values(scheduledBands.Vanaheim.tue);
  let allStagesFriday = jotunheimFriday.concat(midgardFriday, vanaheimFriday);
  //saturday
  let jotunheimSaturday = Object.values(scheduledBands.Jotunheim.tue);
  let midgardSaturday = Object.values(scheduledBands.Midgard.tue);
  let vanaheimSaturday = Object.values(scheduledBands.Vanaheim.tue);
  let allStagesSaturday = jotunheimSaturday.concat(midgardSaturday, vanaheimSaturday);
  // sunday
  let jotunheimSunday = Object.values(scheduledBands.Jotunheim.tue);
  let midgardSunday = Object.values(scheduledBands.Midgard.tue);
  let vanaheimSunday = Object.values(scheduledBands.Vanaheim.tue);
  let allStagesSunday = jotunheimSunday.concat(midgardSunday, vanaheimSunday);
  useEffect(() => {
    setScheduleByDays({
      ...scheduleByDays,
      monday: allStagesMonday,
      tuesday: allStagesTuesday,
      wednesday: allStagesWednesday,
      thursday: allStagesThursday,
      friday: allStagesFriday,
      saturday: allStagesSaturday,
      sunday: allStagesSunday,
    });
  }, []);

  return (
    <section className="program-page">
      <h1>Program 2023</h1>
      <label htmlFor="filters-nav">Filter by: </label>
      <div id="filtersNav">
        <DayFiltering scheduleByDays={scheduleByDays} />
        <StageFiltering scheduledBands={scheduledBands} />
      </div>
      <div className="search-nav">
        <input id="searchField" type="text" placeholder="search here" />
        <img className="search-icon" src={searchIcon} alt="search icon" />
      </div>
      <div className="bands-list-wrapper">
        <BandsList scheduleByDays={scheduleByDays} />
      </div>
    </section>
  );
}

export default Program;
