import React from "react";

function DayFiltering() {
  return (
    <select name="days" id="days">
      <option value="day" defaultValue>
        --week day--
      </option>
      <option value="all">All</option>
      <option value="monday">Monday</option>
      <option value="tuesday">Tuesday</option>
      <option value="wednesday">Wednesday</option>
      <option value="thursday">Thursday</option>
      <option value="friday">Friday</option>
      <option value="saturday">Saturday</option>
      <option value="sunday">Sunday</option>
    </select>
  );
}

export default DayFiltering;
