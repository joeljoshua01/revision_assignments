import { useState } from "react";
import "./styles.css";
import { connect } from "react-redux";
import { addTodo, completeTodo } from "./redux";

const mapStateToProps = (state) => {
  return {
    todos: state.todo,
    completedlist: state.completed
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodos: (txt) => dispatch(addTodo(txt)),
    completeTodos: (obj) => dispatch(completeTodo(obj))
  };
};


const App = (props) => {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    props.addTodos(message);
    setMessage("");
  };

  const handleCheck = (e, id) => {
    e.preventDefault();
    props.completeTodos(id);
  };
  
  return (
    <div className="App">
      <h1>Todo-app</h1>
      <input
        type="text"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>submit </button>
      <h2>pending</h2>
      <ul>
        {props.todos.map((item) => {
          return (
            <>
              <li>
                {item.text}
                <input
                  type="checkbox"
                  onClick={(e) => handleCheck(e, item.id)}
                />
              </li>
            </>
          );
        })}
      </ul>
      <h2>completed</h2>
      <ul>
        {props.completedlist.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
