import React from "react";
import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./Home.css";
import { BiAddToQueue } from "react-icons/bi";
import AddTodo from "../AddTodo/AddTodo";

const data = [
  { id: 0, title: "Walking with dog", isFinished: false },
  { id: 1, title: "Reading a book", isFinished: false },
  { id: 2, title: "Cooking a dinner", isFinished: false },
];

const Home = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copyData = [...todos];
    const current = copyData.find((t) => t.id === id);
    current.isFinished = !current.isFinished;
    setTodos(copyData);
  };
  const removeTodo = (id) => {
    setTodos([...todos].filter((t) => t.id !== id));
  };

  return (
    <div>
      <div className="homeTitle">
        <span>Junior</span> TODO
      </div>
      {todos.map((todo) => (
        
          <TodoItem
            key={todo.id}
            todo={todo}
            changeTodo={changeTodo}
            removeTodo={removeTodo}
          />
        
      ))}
      <AddTodo setTodos={setTodos} todos={todos} />
    </div>
  );
};
export default Home;
