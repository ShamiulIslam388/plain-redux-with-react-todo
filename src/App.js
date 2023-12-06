import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, editTodo } from "./actionCreator";

export default function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editedText, setEditedText] = useState("");
  const [editedId, setEditedId] = useState(null);

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (isEdit) {
      dispatch(editTodo({ id: editedId, text: editedText }));
      setEditedId(null);
      setEditedText("");
      setIsEdit(false);
    } else {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const editTodoHandler = (todo) => {
    setIsEdit(true);
    setEditedId(todo.id);
    setEditedText(todo.text);
  };

  return (
    <div className="p-4 md:p-8 bg-gray-200 h-screen">
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
        {isEdit ? "UPDATE TODO" : "ADD TODO"}
      </h2>
      <form onSubmit={addTodoHandler} className="mb-4 flex justify-center">
        <input
          required
          type="text"
          name="text"
          placeholder="Add text"
          value={isEdit ? editedText : text}
          onChange={(e) =>
            isEdit ? setEditedText(e.target.value) : setText(e.target.value)
          }
          className="p-2 rounded-l-md w-48 md:w-64 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-r-md px-4 hover:bg-blue-600"
        >
          {isEdit ? "Edit" : "Add"}
        </button>
      </form>
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center my-8">
        My Todos
      </h2>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <div
            key={todo.id}
            className="mx-auto w-72 bg-white shadow-md p-4 mb-2 flex justify-between items-center"
          >
            <div className="wrap-word">{todo.text}</div>
            <div className="flex gap-2.5">
              <button
                onClick={() => editTodoHandler(todo)}
                className="text-white bg-green-500 rounded-md px-2 py-1 hover:bg-green-600"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 rounded-md px-2 py-1 hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center font-semibold text-red-500 px-2">
          No Todos
        </div>
      )}
    </div>
  );
}
