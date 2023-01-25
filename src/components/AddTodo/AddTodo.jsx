import React, { useState } from "react";
import "./AddTodo.css";
import {BiAddToQueue} from "react-icons/bi";

const AddTodo = ({setTodos,todos}) => {
  const [title, setTitle] = useState("");
  const addTodo = (title) => {
    setTodos([{ id: new Date(), title: title, isFinished: false }, ...todos]);
    document.querySelector('input').value= '' ;
  };

  return (
    <div className="addTodoField">
      <details>
        <summary><BiAddToQueue /></summary>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a task"
        />
        <button onClick={()=>addTodo(title)}>OK</button>
        
      </details>
    </div>
  );
};
export default AddTodo;
