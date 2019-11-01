import React from "react";

const TodoInput = props => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input type="text" value={props.text} onChange={props.onChange} />
      </form>
    </div>
  );
};

export default TodoInput;
