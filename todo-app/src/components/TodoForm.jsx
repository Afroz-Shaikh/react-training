import React, { useState } from "react";
import "./TodoForm.css";
export default function TodoForm({ onSubmit }) {
  const [newItem, setItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);
    setItem("");
  }
  const date = new Date();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <form className="textfield-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col">
          <h5 className="month">{monthNames[date.getMonth()]}</h5>
          <p className="date">{date.getDate().toString().padStart(2, "0")}</p>
        </div>
        <div className="col-2">
          <h2 className="salutation">Good Afternoon</h2>
          <h5 className="subheading">What is your plan for today</h5>
        </div>
      </div>

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
      {/* <button className="btn">Add</button> */}
    </form>
  );
}
