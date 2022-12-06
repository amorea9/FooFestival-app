import React from "react";

function StageFiltering() {
  return (
    <select name="stages" id="stages">
      <option value="stage" defaultValue>
        --stage--
      </option>
      <option value="all">All</option>
      <option value="midgard">Midgard</option>
      <option value="vanaheim">Vanaheim</option>
      <option value="jotunheim">Jotunheim</option>
    </select>
  );
}

export default StageFiltering;
