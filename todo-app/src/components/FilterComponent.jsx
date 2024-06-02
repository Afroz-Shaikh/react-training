import React from "react";
import "./FilterComponent.css"
import AlertComponent from "./AlertDialog";
export default function FilterComponent({
  handleSelecAll,
  clearAll,
  deleteSelected
}) {

 function handleSearchClick(){
    alert("What to search for ?");
}

  return <> <div className = "row-filter">
   <div>
   <input type="checkbox" onChange={handleSelecAll} />

  <label>Select All</label>
  <AlertComponent></AlertComponent>
   </div>
<div className="actions">
<button className="btn" onClick={clearAll}>Clear All </button>
  <button className="btn" onClick={deleteSelected}>Delete Selected</button>
</div>

 </div></>;
}
  