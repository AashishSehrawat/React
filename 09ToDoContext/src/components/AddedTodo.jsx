import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function AddedTodo({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleCompleted } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleClick = () => {
    toggleCompleted(todo.id);
  };

  return (
    <div
      className={`w-full flex gap-2 bg-white px-2 py-1 rounded-md text-black ${
        todo.completed ? "bg-red-400" : "bg-white"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleClick}
      />
      <input
        type="text"
        className={`w-full outline-none ${
          todo.completed ? "line-through" : ""
        } ${isTodoEditable ? "border rounded-md" : "border-none"}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        className="border cursor-pointer hover:scale-105 transition-all border-black bg-white"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else {
            setIsTodoEditable((prev) => !prev);
          }
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "💾" : "✏️"}
      </button>
      <button className="border cursor-pointer hover:scale-105 transition-all border-black bg-white"
      onClick={() => deleteTodo(todo.id)}>
        ❌
      </button>
    </div>
  );
}

export default AddedTodo;
