import React from "react";
import TodoItem from "./TodoItem";

const TodoList = props => {
  const items = props.items.map(item => (
    <TodoItem key={item.id} item={item} onChange={props.onItemChange} />
  ));

  return (
    <div>
      <ul>{items}</ul>
    </div>
  );
};

export default TodoList;
