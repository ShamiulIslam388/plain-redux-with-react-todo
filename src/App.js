import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./actionCreator";

export default function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };
  return (
    <div className="p-4 md:p-8 bg-gray-200 h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        MY TODOS
      </h1>
      <form onSubmit={addTodoHandler} className="mb-4 flex justify-center">
        <input
          required
          type="text"
          name="text"
          placeholder="Add text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="p-2 rounded-l-md w-48 md:w-64 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-r-md px-4 hover:bg-blue-600"
        >
          Add
        </button>
      </form>
      {todos.length > 0 &&
        todos.map((todo) => (
          <div
            key={todo.id}
            className="mx-auto w-64 bg-white shadow-md p-4 mb-2 flex justify-between items-center"
          >
            <span>{todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 rounded-md px-2 py-1 hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
}
