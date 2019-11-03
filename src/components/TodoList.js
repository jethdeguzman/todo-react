import React from "react";

const TodoList = props => {
  const items = props.items.map(item => (
    <li key={item.id}>
      <input
        type="checkbox"
        checked={item.isChecked}
        onChange={() => props.onItemCheck(item.id)}
      />

      <span
        style={{
          textDecoration: item.isChecked ? "line-through" : "",
          marginLeft: "2px",
          marginRight: "2px"
        }}
      >
        {item.text}
      </span>

      <button onClick={() => props.onItemRemove(item.id)}>X</button>
    </li>
  ));

  return (
    <div>
      <ul>{items}</ul>
    </div>
  );
};

export default TodoList;
