import React from "react";
import PropTypes from "prop-types";
import { Multiselect } from "multiselect-react-dropdown";
import { InputGroup, FormControl } from "react-bootstrap";

const SearchTodo = ({ todoList, setSearchTodo, searchTodo }) => {
  return (
    <div className="search-container">
      {/* Below code is for performing dynamic search operations. */}
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-default">
            Find by todo:
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          type="text"
          onChange={(e) => setSearchTodo(e.target.value)}
          placeholder="Search todo..."
          value={searchTodo}
        />
      </InputGroup>
      {/* Single select dropdown */}
      <Multiselect options={todoList} singleSelect displayValue="text" />
      {/* Multi select dropdown */}
      <Multiselect options={todoList} displayValue="text" />
    </div>
  );
};

SearchTodo.propTypes = {
  searchTodo: PropTypes.string,
  setSearchTodo: PropTypes.func,
  todoList: PropTypes.array,
};

export default SearchTodo;
