import React, { useState } from "react";
import Todo from "../Todo/Todo";
import FormField from "../Form/FormField";
import Title from "../Title/Title";
import ReactPaginate from "react-paginate";
import SearchTodo from "../SearchTodo/SearchTodo";

const TodoList = () => {
  const [myName] = useState("React");
  const [todoList, setTodoList] = useState([
    { text: "Learn hooks concept", completed: false },
    {
      text: "Learn storybook",
      completed: false,
    },
    {
      text: "Implement graphQL with react",
      completed: false,
    },
    {
      text: "Learn ES6 features",
      completed: false,
    },
    {
      text: "How to add redux state management",
      completed: false,
    },
  ]);
  const [currentTodo, setCurrentTodo] = useState("");
  const [currentTodoId, setCurrentTodoId] = useState("-1");
  const [offset, setOffset] = useState("0");
  const [perPage, setPerPage] = useState("3");
  const [currentPages, setCurrentPages] = useState("0");
  const [searchTodo, setSearchTodo] = useState("");

  // performing search operation for the todoList.
  const dynamicSearch = () => {
    const result = todoList.filter((todo) =>
      todo.text.toLowerCase().includes(searchTodo.toLowerCase())
    );
    return result;
  };

  const recievedTodoList = () => {
    const sliceTodoData = dynamicSearch().slice(offset, offset + perPage);
    return sliceTodoData;
  };

  const onChange = (e) => {
    setCurrentTodo(e.target.value);
  };

  // adding todo
  const onAddTodo = (e) => {
    if (currentTodoId !== -1) {
      var oldTodo = todoList.map((todo, i) =>
        i == currentTodoId ? { ...todo, text: currentTodo } : todo
      );
      setTodoList(oldTodo);
      setCurrentTodoId(-1);
    } else {
      setTodoList([...todoList, { text: currentTodo, completed: false }]);
    }
  };

  // deleting todo
  const onDeleteTodo = (e) => {
    e.preventDefault();
    var deleteTodo = todoList.filter((todo, i) => i != e.target.id);
    setTodoList(deleteTodo);
  };

  // toggle todo
  const onToggleTodo = (e) => {
    var newList = todoList.map((todo, i) => {
      if (i == e.target.id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    setTodoList(newList);
  };

  // editing todo
  const onEditTodo = (e) => {
    e.preventDefault();
    setCurrentTodo(todoList[e.target.id].text);
    setCurrentTodoId(e.target.id);
  };

  // handling page click for pagination
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    let offset = selectedPage * perPage;
    setOffset(offset);
    setCurrentPages(selectedPage);
  };

  return (
    <div className="todolist">
      <Title myName={myName} />
      <FormField
        onChange={onChange}
        currentTodo={currentTodo}
        onAddTodo={onAddTodo}
      />

      <SearchTodo
        todoList={todoList}
        // below are for performing search operations instead of single select or multi select.
        setSearchTodo={setSearchTodo}
        searchTodo={searchTodo}
      />

      <Todo
        recievedTodoList={recievedTodoList}
        onEditTodo={onEditTodo}
        onToggleTodo={onToggleTodo}
        onDeleteTodo={onDeleteTodo}
      />
      <div>
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          pageCount={5}
          onPageChange={(e) => handlePageClick(e)}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default TodoList;
