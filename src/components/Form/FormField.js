import React from "react";
import PropTypes from "prop-types";
import { Button, Form } from "react-bootstrap";

const FormField = ({ onChange, currentTodo, onAddTodo }) => {
  return (
    <div className="form-field">
      <Form>
        <Form.Group>
          <Form.Label>Enter Todo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter todo..."
            onChange={onChange}
            value={currentTodo}
          />
          <Form.Text className="text-muted">
            Please enter the activity you want to perform
          </Form.Text>
        </Form.Group>
        <Button variant="primary" onClick={onAddTodo} block>
          Submit Todo
        </Button>
      </Form>
    </div>
  );
};

FormField.propTypes = {
  currentTodo: PropTypes.string,
  onChange: PropTypes.func,
  onAdd: PropTypes.func,
};

export default FormField;
