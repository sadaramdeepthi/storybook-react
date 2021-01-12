import React from "react";
import { storiesOf } from "@storybook/react";
import Todo from "./Todo";

const props = {
  todo: { id: "1", text: "Visit Doctor" },
  index: 0,
  handleDeleteTodo: () => {},
};

storiesOf("Todo", module).add("default", () => <Todo {...props} />);
