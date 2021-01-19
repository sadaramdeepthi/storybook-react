import React from "react";
import PropTypes from "prop-types";
import { Button, Table } from "react-bootstrap";

const Todo = ({ recievedTodoList, onEditTodo, onDeleteTodo, onToggleTodo }) => {
  return (
    <div className="todo">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th> Todo</th>
            <th>Edit</th>
            <th>Toggle</th>
            <th>Delete</th>
          </tr>
        </thead>
        {recievedTodoList().map((todo, i) => (
          <tbody>
            <tr key={i}>
              <td>{i + 1}.</td>
              <td>
                {" "}
                {todo.completed ? (
                  <del>{todo.text} </del>
                ) : (
                  <span>{todo.text}</span>
                )}
              </td>
              <td>
                <Button id={i} variant="info" onClick={onEditTodo} size="sm">
                  Edit
                </Button>
              </td>
              <td>
                <Button id={i} variant="dark" onClick={onToggleTodo} size="sm">
                  Toggle
                </Button>
              </td>
              <td>
                <Button
                  id={i}
                  variant="danger"
                  onClick={onDeleteTodo}
                  size="sm"
                >
                  delete
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

Todo.propTypes = {
  recievedTodoList: PropTypes.func,
  onEditTodo: PropTypes.func,
  onDeleteTodo: PropTypes.func,
  onToggleTodo: PropTypes.func,
};

export default Todo;
