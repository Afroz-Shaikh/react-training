import React, { useState } from "react";
export default function TodoForm({ onSubmit }) {
  //   props.onSubmit(newItem);
  const [newItem, setItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);
    setItem("");
  }

  return (
    <form className="textfield-form" onSubmit={handleSubmit}>
      {/* <h1 className="main-heading" htmlFor="item">
        Dead Simple Tasks
      </h1> */}
      <div className="row">
        <div className="col">
          <h5 className="month">Feb</h5>
          <p className="date">04</p>
        </div>
        <div className="col-2">
          <h2 className="salutation">Good Afternoon</h2>
          <h5>What is your plan for today</h5>
        </div>
      </div>
      <p className="subheading" htmlFor="item">
        Todo List made simple
      </p>
      <div className="form-row">
        <input
          type="text"
          className="textfield"
          placeholder="+ Add a new item"
          value={newItem}
          onChange={(e) => setItem(e.target.value)}
          id="item"
          name="name"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
