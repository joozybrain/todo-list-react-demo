import React from "react";

import "./todoitem.css";

function TodoItem(props) {
  return (
    <li
      key={props.i}
      onClick={props.handleClick}
      className={props.todo.isCompleted ? "done" : null}
    >
      {props.todo.description}
    </li>
    
  );
}

export default TodoItem;
