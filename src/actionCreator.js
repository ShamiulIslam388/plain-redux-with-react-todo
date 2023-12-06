import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "./constants";

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: text,
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};

export const editTodo = (text) => {
  return {
    type: EDIT_TODO,
    payload: text,
  };
};
