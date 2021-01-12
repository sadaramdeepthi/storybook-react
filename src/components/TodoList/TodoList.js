import React, { useState } from "react";
import Todo from "../Todo/Todo";
import Form from "../Form/Form";
import Title from "../Title/Title";

const TodoList = () => {
  const [myName] = useState("React");
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const handleSubmit = () => {
    if (inputValue === "") return;
    const newTodo = { id: Date.now(), text: inputValue };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="todolist">
      <Title myName={myName} />
      <Form
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSubmit={handleSubmit}
      />
      {todos.map((todo, index) => (
        <Todo todo={todo} index={index} handleDeleteTodo={handleDeleteTodo} />
      ))}
    </div>
  );
};

export default TodoList;
