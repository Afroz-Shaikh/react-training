import React, { useState } from "react";
import "./AlertComponent.css"; // Import CSS for styling the modal

function AlertComponent({ onSearch }) {
  const [showDialog, setShowDialog] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    onSearch(inputValue);
    setShowDialog(false);
  };

  return (
    <div>
      {showDialog && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowDialog(false)}>
              &times;
            </span>
            <label>
              Search for:
              <input
                className="search-field"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
              />
            </label>
            <button className="search-btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}
      <button className="btn" onClick={() => setShowDialog(true)}>
        🔎
      </button>
    </div>
  );
}

export default AlertComponent;
