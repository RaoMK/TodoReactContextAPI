import React, { useState, useContext } from "react";
import { CREATE_TODO } from "../context/context.actions";
import TodoContext from "../context/TodoContext";
import { v4 } from "uuid";

const TodoForm = () => {
  const [todoValue, setTodoValue] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoValue === "") {
      return alert("Please enter something");
    }
    const todo = {
      todoValue,
      id: v4(),
    };
    dispatch({
      type: CREATE_TODO,
      payload: todo,
    });
    setTodoValue("");
  };
  return (
    <div className=" flex flex-col justify-center items-center mt-10">
      <input
        className=" border border-green-400  w-96 h-auto outline-none bg-black overflow-hidden p-2 rounded "
        placeholder="Enter your todo here"
        id="todo"
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-green-400 p-2 rounded-lg text-white mt-5"
      >
        Add Todo
      </button>
    </div>
  );
};
export default TodoForm;
