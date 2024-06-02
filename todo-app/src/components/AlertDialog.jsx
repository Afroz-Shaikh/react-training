import React, { useState } from 'react';

function AlertComponent() {
  const [showDialog, setShowDialog] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    alert(`You entered: ${inputValue}`);
    setShowDialog(false);
  };

  return (
    <div>
      {showDialog && (
        <div>
          <label>
            Enter something:
            <input type="text" value={inputValue} onChange={handleInputChange} />
          </label>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
      <button onClick={() => setShowDialog(true)}>Show Dialog</button>
    </div>
  );
}

export default AlertComponent;