import React from "react";

function StageFiltering(props) {
  return (
    <select onChange={props.stageChanged} name="stages" id="stages">
      <option value="all" defaultValue>
        All stages
      </option>
      <option value="Midgard">Midgard</option>
      <option value="Vanaheim">Vanaheim</option>
      <option value="Jotunheim">Jotunheim</option>
    </select>
  );
}

export default StageFiltering;
