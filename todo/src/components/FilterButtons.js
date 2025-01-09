import React from "react";

const FilterButtons = ({ filter, setFilter }) => {
  return (
    <div>
      <button
        style={{ fontWeight: filter === "all" ? "bold" : "normal" }}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        style={{ fontWeight: filter === "active" ? "bold" : "normal" }}
        onClick={() => setFilter("active")}
      >
        Active
      </button>
      <button
        style={{ fontWeight: filter === "completed" ? "bold" : "normal" }}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;
