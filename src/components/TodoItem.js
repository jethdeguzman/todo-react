import React from "react";

const TodoItem = props => {
  return (
    <li>
      <input
        type="checkbox"
        checked={props.item.isChecked}
        value={props.item.id}
        onChange={props.onChange}
      />
      <span>{props.item.text}</span>
    </li>
  );
};

export default TodoItem;
