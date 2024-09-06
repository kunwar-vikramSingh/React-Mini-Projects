//createSlice is a function, which is use to create Reducers.
//naoid are used for generating unique ID.
import { createSlice, nanoid } from "@reduxjs/toolkit";
//step-2 define InitialState.
const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};
//Step-3 Creating the Slice.There is three property in slice, i.e name, initialState and reducers.
export const todoSlice = createSlice({
  name: "todo",// name property are used for identify the Slice.
  initialState,// initialState property are used for define the initial state of the slice.
  reducers: { //  reducers property are used for action handle.
//Action -1 : Add Todo-
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
