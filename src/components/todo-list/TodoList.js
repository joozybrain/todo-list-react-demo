import React, { Component } from "react";
import { todos } from "../../utils/seedData";
import "./TodoList.css";
import TodoItem from "../todoitem/TodoItem";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
      value: ""
    };
  }

  render() {
    return (
      <div id="todo-list">
        <h1 id="todo-title">{this.props.title}</h1>
        {this.state.todos.map((todo, i) => {
          return (
            <TodoItem
              todo={todo}
              key={i}
              handleClick={this.handleClick.bind(this, i)}
            />
          );
        })}

        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Enter your to-do:
            <input
              id="text"
              type="text"
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  handleChange(event) {
    if (event.target.value !== "") {
      this.setState({ value: event.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    let stateArray = this.state.todos;
    stateArray.push({ description: this.state.value, isCompleted: false });
    this.setState({ todos: stateArray });
    this.setState({ value: "" });
    console.log(this.state.todos);
  }

  handleClick(todoindex) {
    let stateArray = this.state.todos;
    stateArray[todoindex].isCompleted = stateArray[todoindex].isCompleted
      ? false
      : true;

    this.setState(stateArray);
    console.log(stateArray[todoindex]);
  }
}

export default TodoList;
