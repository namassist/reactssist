import React from "react";
import "./list.css";

const List = ({ name, type }) => {
  return (
    <div className="form-check">
      <input type={type} value="" id="todo" />
      <label class="form-check-label" for="todo">
        {name}
      </label>
    </div>
  );
};

export default List;
