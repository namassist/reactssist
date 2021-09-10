import React from "react";
import "../index.css";

const List = ({ name, type }) => {
  return (
    <div className="form-check">
      <input type={type} value="" id="todo" />
      <label className="form-check-label" for="todo">
        {name}
      </label>
    </div>
  );
};

export default List;
