import React, { Component } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoStats from "./components/TodoStats";

const generateItemId = () => {
  const now = new Date();
  return `${Math.round(now.getTime() / 1000)}`;
};

class App extends Component {
  state = {
    text: "",
    items: []
  };

  handleInputSubmit = e => {
    e.preventDefault();
    const item = {
      id: generateItemId(),
      text: this.state.text,
      isChecked: false
    };
    this.setState({ items: this.state.items.concat(item), text: "" });
  };

  handleInputChange = e => {
    this.setState({ text: e.target.value });
  };

  handleItemChange = e => {
    const items = this.state.items.map(item => {
      if (item.id !== e.target.value) {
        return item;
      } else {
        item.isChecked = !item.isChecked;
        return item;
      }
    });

    this.setState({ items });
  };

  render() {
    return (
      <div>
        <TodoInput
          text={this.state.text}
          onSubmit={this.handleInputSubmit}
          onChange={this.handleInputChange}
        />
        <TodoList
          items={this.state.items}
          onItemChange={this.handleItemChange}
        />
        <TodoStats items={this.state.items} />
      </div>
    );
  }
}

export default App;
