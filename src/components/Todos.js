import React, { useState } from "react";

const Todos = () => {
  const [toDo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  // console.log("to do text", toDo);

  return (
    <div className="addToDos">
      <input type="text" onChange={handleChange} className="todo-input" />
      <button className="add-btn">Add</button>
    </div>
  );
};

export default Todos;
