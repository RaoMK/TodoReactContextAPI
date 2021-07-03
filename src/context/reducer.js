import { CREATE_TODO, DELETE_TODO } from "./context.actions";

const TodoReducer = (state, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
export default TodoReducer;
