import React, { useReducer } from "react";
import TodoContext from "./context/TodoContext";
import TodoReducer from "./context/reducer";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

export default function App() {
  const [todos, dispatch] = useReducer(TodoReducer, []);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <div className="bg-black text-white h-screen w-screen items-center justify-center text-center px-60 py-20">
        <h1 className="text-4xl">Todo App with Context API</h1>
        <TodoForm />
        <Todos />
      </div>
    </TodoContext.Provider>
  );
}
