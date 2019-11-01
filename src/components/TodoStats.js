import React from "react";

const TodoStats = props => {
  const remaining = props.items.reduce(
    (total, current) => (current.isChecked ? total + 0 : total + 1),
    0
  );
  return <div>{remaining} items left</div>;
};

export default TodoStats;
