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

  const [filter, setFilter] = useState({
    day: "all",
    stage: "all",
    search: "",
  });
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
  const fullSchedule = allStagesMonday.concat(
    allStagesTuesday,
    allStagesWednesday,
    allStagesThursday,
    allStagesFriday,
    allStagesSaturday,
    allStagesSunday
  );

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
          day: "Monday",
        };
      } else if (fullSchedule.indexOf(item) <= 36 * 2) {
        return {
          ...item,
          day: "Tuesday",
        };
      } else if (fullSchedule.indexOf(item) <= 36 * 3) {
        return {
          ...item,
          day: "Wednesday",
        };
      } else if (fullSchedule.indexOf(item) <= 36 * 4) {
        return {
          ...item,
          day: "Thursday",
        };
      } else if (fullSchedule.indexOf(item) <= 36 * 5) {
        return {
          ...item,
          day: "Friday",
        };
      } else if (fullSchedule.indexOf(item) <= 36 * 6) {
        return {
          ...item,
          day: "Saturday",
        };
      } else if (fullSchedule.indexOf(item) <= 36 * 7) {
        return {
          ...item,
          day: "Sunday",
        };
      }
    });
  }

  let scheduleWithStageAndDays;
  function addStage() {
    scheduleWithStageAndDays = scheduleWithDays.map((item) => {
      if (
        scheduleWithDays.indexOf(item) < 12 ||
        (scheduleWithDays.indexOf(item) >= 36 && scheduleWithDays.indexOf(item) <= 47) ||
        (scheduleWithDays.indexOf(item) >= 72 && scheduleWithDays.indexOf(item) <= 83) ||
        (scheduleWithDays.indexOf(item) >= 107 && scheduleWithDays.indexOf(item) <= 119) ||
        (scheduleWithDays.indexOf(item) >= 144 && scheduleWithDays.indexOf(item) <= 155) ||
        (scheduleWithDays.indexOf(item) >= 180 && scheduleWithDays.indexOf(item) <= 191) ||
        (scheduleWithDays.indexOf(item) >= 216 && scheduleWithDays.indexOf(item) <= 227)
      ) {
        return {
          ...item,
          stage: "Jotunheim",
        };
      } else if (
        scheduleWithDays.indexOf(item) < 12 + 12 ||
        (scheduleWithDays.indexOf(item) >= 36 + 12 && scheduleWithDays.indexOf(item) <= 47 + 12) ||
        (scheduleWithDays.indexOf(item) >= 72 + 12 && scheduleWithDays.indexOf(item) <= 83 + 12) ||
        (scheduleWithDays.indexOf(item) >= 107 + 12 && scheduleWithDays.indexOf(item) <= 119 + 12) ||
        (scheduleWithDays.indexOf(item) >= 144 + 12 && scheduleWithDays.indexOf(item) <= 155 + 12) ||
        (scheduleWithDays.indexOf(item) >= 180 + 12 && scheduleWithDays.indexOf(item) <= 191 + 12) ||
        (scheduleWithDays.indexOf(item) >= 216 + 12 && scheduleWithDays.indexOf(item) <= 227 + 12)
      ) {
        return {
          ...item,
          stage: "Midgard",
        };
      } else {
        return {
          ...item,
          stage: "Vanaheim",
        };
      }
    });
  }

  addDay();
  addStage();

  const filterChanged = (e) => {
    setFilter({ ...filter, day: e.target.value });
    // console.log(e.target.value);
  };

  const stageChanged = (e) => {
    setFilter({ ...filter, stage: e.target.value });
    // console.log(e.target.value);
  };
  const searchBand = (e) => {
    setFilter({ ...filter, search: e.target.value.toLowerCase() });
    // console.log(e.target.value);
  };

  let filteredList = scheduleWithStageAndDays;
  //if filtered by day
  if (filter.day != "all") {
    filteredList = scheduleWithStageAndDays.filter((show) => show.day === filter.day);
  }
  if (filter.stage != "all") {
    //if filtered by stage
    filteredList = scheduleWithStageAndDays.filter((show) => show.stage === filter.stage);
    // console.log("stage array", filteredList);
  }
  if (filter.day != "all" && filter.stage != "all") {
    //if filtered by both
    filteredList = scheduleWithStageAndDays.filter((show) => show.day === filter.day && show.stage === filter.stage);
  }
  if (filter.search != "") {
    filteredList = scheduleWithStageAndDays.filter((show) => show.act.toLowerCase().includes(filter.search));
  }

  return (
    <section className="program-page">
      <h1>Program 2023</h1>
      <label htmlFor="filters-nav">Filter by: </label>
      <div className="filters-wrapper">
        <div id="filtersNav">
          <DayFiltering filterChanged={filterChanged} />
          <StageFiltering stageChanged={stageChanged} />
        </div>
        <div className="search-nav">
          <input id="searchField" type="text" placeholder="search here" onKeyUp={searchBand} />
          <img className="search-icon" id="searchIcon" src={searchIcon} alt="search icon" />
        </div>
      </div>
      <div className="bands-list-comp-wrapper">
        <BandsList filteredList={filteredList} filter={filter} />
      </div>
    </section>
  );
}

export default Program;
