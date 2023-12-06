import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from "./constants";

const initialState = [{ id: Date.now(), text: "Hello Todo", completed: false }];

const todoReducer = (state = initialState, action) => {
  if (action.type === ADD_TODO) {
    return [
      ...state,
      {
        id: Date.now(),
        text: action.payload,
        completed: false,
      },
    ];
  }
  if (action.type === REMOVE_TODO) {
    return state.filter((todo) => todo.id !== action.payload);
  }
  if (action.type === EDIT_TODO) {
    return state.map((todo) => {
      if (todo.id === action.payload.id) {
        return { ...state, text: action.payload.text };
      } else {
        return todo;
      }
    });
  }
  return state;
};

export default todoReducer;
