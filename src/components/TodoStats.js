import React from "react";

const TodoStats = props => {
  const completedItems = props.items.filter(item => item.isChecked);
  const remainingItems = props.items.filter(item => !item.isChecked);
  return (
    <div>
      <div>{remainingItems.length} items left</div>
      <div>
        <button onClick={() => props.onFilterState("all")}>All</button>
        <button onClick={() => props.onFilterState("active")}>Active</button>
        <button onClick={() => props.onFilterState("completed")}>
          Completed
        </button>
      </div>
      <div>
        <button
          style={{ display: completedItems.length ? "block" : "none" }}
          onClick={() => props.onClearCompletedItems()}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TodoStats;
