import React, { Component } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoStats from "./components/TodoStats";

class App extends Component {
  state = {
    items: [],
    filterState: "all"
  };

  handleAddItem = item => {
    this.setState({ items: [item, ...this.state.items] });
  };

  handleCheckItem = id => {
    const items = this.state.items.map(item => {
      if (item.id === id) {
        item.isChecked = !item.isChecked;
        return item;
      } else {
        return item;
      }
    });

    this.setState({ items });
  };

  handleRemoveItem = id => {
    const items = this.state.items.filter(item => item.id !== id);

    this.setState({ items });
  };

  handleFilterState = filterState => {
    this.setState({ filterState });
  };

  handleClearCompletedItems = () => {
    const items = this.state.items.filter(item => !item.isChecked);

    this.setState({ items });
  };

  render() {
    let items;

    switch (this.state.filterState) {
      case "active":
        items = this.state.items.filter(item => !item.isChecked);
        break;
      case "completed":
        items = this.state.items.filter(item => item.isChecked);
        break;
      default:
        items = this.state.items;
    }
    return (
      <div>
        <TodoForm onAddItem={this.handleAddItem} />
        <TodoList
          items={items}
          onItemCheck={this.handleCheckItem}
          onItemRemove={this.handleRemoveItem}
        />
        <TodoStats
          items={this.state.items}
          onFilterState={this.handleFilterState}
          onClearCompletedItems={this.handleClearCompletedItems}
        />
      </div>
    );
  }
}

export default App;
