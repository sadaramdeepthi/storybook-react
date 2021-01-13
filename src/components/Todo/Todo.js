import React from "react";
import PropTypes from "prop-types";

const Todo = ({ todo, index, handleDeleteTodo }) => {
  return (
    <div key={todo.id} className="todo">
      <span className="todo-text">
        {index + 1}. {todo.text}
      </span>
      <span onClick={() => handleDeleteTodo(todo.id)} className="todo-delete">
        x
      </span>
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.object({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }),
  index: PropTypes.number,
  handleDeleteTodo: PropTypes.func,
};

export default Todo;
