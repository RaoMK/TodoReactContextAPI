import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";
import { DELETE_TODO } from "../context/context.actions";

const Todos = () => {
  const { todos, dispatch } = useContext(TodoContext);
  return (
    <div className="mt-10  rounded-xl h-auto   px-20">
      {todos.map((todo) => (
        <div
          className="flex justify-between mt-5 mb-5 items-center p-3 rounded-xl border border-green-400 "
          key={todo.id}
        >
          <h1 className="text-2xl ">{todo.todoValue}</h1>
          <svg
            onClick={() => {
              dispatch({
                type: DELETE_TODO,
                payload: todo.id,
              });
            }}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-5 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default Todos;
