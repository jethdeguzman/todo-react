import React, { Component } from "react";

const generateItemId = () => {
  const now = new Date();
  return `${now.getTime() / 1000}`;
};

class TodoForm extends Component {
  state = {
    text: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const item = {
      id: generateItemId(),
      text: this.state.text,
      isChecked: false
    };

    this.props.onAddItem(item);
    this.setState({ text: "" });
  };

  handleTextChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleTextChange}
          />
        </form>
      </div>
    );
  }
}

export default TodoForm;
