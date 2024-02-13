import React, { createContext, useReducer } from "react";
import TodoReducer from "../reducer/TodoReducer";
import { useEffect } from "react";

export const TodoContext = createContext();

const initialState = {
  todos: [],
  // For Edit part we will use below code
  editFlag: false,
  editID: "",
  textToEdit: "",
};

const TodoProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(TodoReducer, initialState);

  // to get the data in local store

  const [state, dispatch] = useReducer(TodoReducer, initialState, () => {
    const storedTodos = localStorage.getItem("todos");
    return {
      ...initialState,
      todos: storedTodos ? JSON.parse(storedTodos) : initialState.todos,
    };
  });

  // Use useEffect to save 'todos' to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        editFlag: state.editFlag,
        editID: state.editID,
        textToEdit: state.textToEdit,
        dispatch,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
