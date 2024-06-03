import React from "react";
import "./FilterComponent.css";
import AlertComponent from "./AlertDialog";

export default function FilterComponent({
  handleSelecAll,
  clearAll,
  deleteSelected,
  onSearch,
  isFiltered,
  setIsFiltered,
}) {
  return (
    <div className="row-filter">
      <div className="row">
        <input type="checkbox" onChange={handleSelecAll} />
        <label>Select All</label>
        {isFiltered ? (
          <span className="btn" onClick={() => setIsFiltered(false)}>
            Show All
          </span>
        ) : (
          ""
        )}
        <AlertComponent onSearch={onSearch} />
      </div>
      <div className="actions">
        <button className="btn" onClick={clearAll}>
          Clear All
        </button>
        <button className="btn" onClick={deleteSelected}>
          Delete Selected
        </button>
      </div>
    </div>
  );
}
