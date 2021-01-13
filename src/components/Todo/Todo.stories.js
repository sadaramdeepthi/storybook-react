import React from "react";
import { action } from "@storybook/addon-actions";
import Todo from "./Todo";

export default {
  title: "Todo",
  component: "Todo",
  argTypes: {
    todo: { id: "1", text: "Visit Doctor" },
    index: 0,
    handleDeleteTodo: () => {},
  },
};

const Template = (args) => <Todo {...args} />;

export const Default = Template.bind({});
Default.args = {
  todo: { id: "1", text: "Visit Doctor" },
  index: 0,
  handleDeleteTodo: action("Todo is deleted"),
};
