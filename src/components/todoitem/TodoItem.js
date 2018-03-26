import React from "react";
import PropTypes from "proptypes"

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

TodoItem.propTypes = {
  handleClick : PropTypes.func.isRequired,
  todo : PropTypes.object.isRequired

}
export default TodoItem;
