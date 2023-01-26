import React from "react";
import CheckIcon from "./CheckIcon";
import "./TodoItem.css";
import { FcEmptyTrash } from "react-icons/fc";

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div className="containerForItem">
      
        <button className="checkIcon" onClick={() => changeTodo(todo.id)}>
          <CheckIcon isFinished={todo.isFinished} />

          <div className={todo.isFinished ? "todoTitleCross" : "todoTitle"}>
            {todo.title}
          </div>
        </button>

        <button className="fcEmptyTrash" onClick={() => removeTodo(todo.id)}>
          <FcEmptyTrash />
        </button>
      
    </div>
  );
};
export default TodoItem;
