import { createStore } from "redux";
const ADD = "ADD";
const COMPLETED = "COMPLETED";

let nextId = 1;
let initialState = {
  todo: [{ id: 0, text: "take a walk" }],
  completed: []
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      return {
        ...state,
        todo: [...state.todo, { id: action.id, text: action.text }]
      };
    }
    case COMPLETED: {
      return {
        todo: state.todo.filter((item) => item.id !== action.id),
        completed: [...state.completed].concat(
          state.todo.filter((item) => item.id === action.id)[0].text
        )
      };
    }
    default:
      return state;
  }
};

export const addTodo = (task) => ({
  type: ADD,
  id: nextId++,
  text: task
});

export const completeTodo = (id) => ({
  type: COMPLETED,
  id: id
});

export const store = createStore(todos);
