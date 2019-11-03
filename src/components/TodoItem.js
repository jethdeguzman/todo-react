import React from "react";

const TodoItem = props => {
  return (
    <li>
      <input
        type="checkbox"
        checked={props.item.isChecked}
        value={props.item.id}
        onChange={() => props.onChange(props.item.id)}
      />
      <span
        style={{
          textDecoration: props.item.isChecked ? "line-through" : "",
          marginLeft: "2px"
        }}
      >
        {props.item.text}
      </span>
    </li>
  );
};

export default TodoItem;
