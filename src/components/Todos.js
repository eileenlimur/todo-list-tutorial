import React, { useState } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    todos: state,
  }
}

const Todos = (props) => {
  const [toDo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  console.log("props from store", props); //gives us dispatch

  return (
    <div className="addToDos">
      <input type="text" onChange={handleChange} className="todo-input" />
      <button className="add-btn">Add</button>
    </div>
  );
};

export default connect(mapStateToProps,null)(Todos);