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

  const [filter, setFilter] = useState("monday");
  // const [filteredList, setFilteredList] = useState([scheduledBands]);

  // const [scheduleByDays, setScheduleByDays] = useState([{}]);
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
  let jotunheimWednesday = Object.values(scheduledBands.Jotunheim.wed);
  let midgardWednesday = Object.values(scheduledBands.Midgard.wed);
  let vanaheimWednesday = Object.values(scheduledBands.Vanaheim.wed);
  let allStagesWednesday = jotunheimWednesday.concat(midgardWednesday, vanaheimWednesday);
  //thursday
  let jotunheimThursday = Object.values(scheduledBands.Jotunheim.thu);
  let midgardThursday = Object.values(scheduledBands.Midgard.thu);
  let vanaheimThursday = Object.values(scheduledBands.Vanaheim.thu);
  let allStagesThursday = jotunheimThursday.concat(midgardThursday, vanaheimThursday);
  //friday
  let jotunheimFriday = Object.values(scheduledBands.Jotunheim.fri);
  let midgardFriday = Object.values(scheduledBands.Midgard.fri);
  let vanaheimFriday = Object.values(scheduledBands.Vanaheim.fri);
  let allStagesFriday = jotunheimFriday.concat(midgardFriday, vanaheimFriday);
  //saturday
  let jotunheimSaturday = Object.values(scheduledBands.Jotunheim.sat);
  let midgardSaturday = Object.values(scheduledBands.Midgard.sat);
  let vanaheimSaturday = Object.values(scheduledBands.Vanaheim.sat);
  let allStagesSaturday = jotunheimSaturday.concat(midgardSaturday, vanaheimSaturday);
  // sunday
  let jotunheimSunday = Object.values(scheduledBands.Jotunheim.sun);
  let midgardSunday = Object.values(scheduledBands.Midgard.sun);
  let vanaheimSunday = Object.values(scheduledBands.Vanaheim.sun);
  let allStagesSunday = jotunheimSunday.concat(midgardSunday, vanaheimSunday);

  //full schedule all days all stages
  const fullSchedule = allStagesMonday.concat(allStagesTuesday, allStagesWednesday, allStagesThursday, allStagesFriday, allStagesSaturday, allStagesSunday);

  // const fullSchedule = {
  //   monday: allStagesMonday,
  //   tuesday: allStagesTuesday,
  //   wednesday: allStagesWednesday,
  //   thursday: allStagesThursday,
  // };

  //console.log("allStagesMonday", allStagesMonday);

  // useEffect(() => {
  //   setScheduleByDays([allStagesMonday, allStagesTuesday, allStagesWednesday, allStagesThursday, allStagesFriday, allStagesSaturday, allStagesSunday]);
  // }, []);

  //trying to add property for each day
  let scheduleWithDays;

  function addDay() {
    //for each show if the index is <=36 then assign monday as a day
    scheduleWithDays = fullSchedule.map((item) => {
      if (fullSchedule.indexOf(item) <= 36) {
        return {
          ...item,
          day: "monday",
        };
      } else if (fullSchedule.indexOf(item) <= 36 * 2) {
        return {
          ...item,
          day: "tuesday",
        };
      } else if (fullSchedule.indexOf(item) <= 36 * 3) {
        return {
          ...item,
          day: "wednesday",
        };
      } else if (fullSchedule.indexOf(item) <= 36 * 4) {
        return {
          ...item,
          day: "thursday",
        };
      } else if (fullSchedule.indexOf(item) <= 36 * 5) {
        return {
          ...item,
          day: "friday",
        };
      } else if (fullSchedule.indexOf(item) <= 36 * 6) {
        return {
          ...item,
          day: "saturday",
        };
      } else if (fullSchedule.indexOf(item) <= 36 * 7) {
        return {
          ...item,
          day: "sunday",
        };
      }
    });
  }

  addDay();
  console.log("scheduleWithDays", scheduleWithDays);

  const filterChanged = (e) => {
    setFilter(e.target.value);
    console.log(e.target.value);
  };
  let filteredList;

  if (filter === "all") {
    filteredList = scheduleWithDays;
    console.log("filteredlist all", filteredList);
  }

  if (filter) {
    //gives the array with the same day of the week as the filter
    filteredList = scheduleWithDays.filter((show) => show.day === filter);
    console.log("filtered list for specific day", filteredList);
  }

  return (
    <section className="program-page">
      <h1>Program 2023</h1>
      <label htmlFor="filters-nav">Filter by: </label>
      <div id="filtersNav">
        <DayFiltering filterChanged={filterChanged} setFilter={setFilter} />
        <StageFiltering scheduledBands={scheduledBands} />
      </div>
      <div className="search-nav">
        <input id="searchField" type="text" placeholder="search here" />
        <img className="search-icon" src={searchIcon} alt="search icon" />
      </div>
      <div className="bands-list-wrapper">
        <BandsList filteredList={filteredList} filter={filter} />
      </div>
    </section>
  );
}

export default Program;
