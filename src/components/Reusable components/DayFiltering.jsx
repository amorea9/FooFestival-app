import React from "react";

function DayFiltering(props) {
  return (
    <select onChange={props.filterChanged} name="days" id="days">
      <option value="all" defaultValue>
        All days
      </option>
      <option value="Monday">Monday</option>
      <option value="Tuesday">Tuesday</option>
      <option value="Wednesday">Wednesday</option>
      <option value="Thursday">Thursday</option>
      <option value="Friday">Friday</option>
      <option value="Saturday">Saturday</option>
      <option value="Sunday">Sunday</option>
    </select>
  );
}

export default DayFiltering;
