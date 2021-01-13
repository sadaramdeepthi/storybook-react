import React from "react";
import { action } from "@storybook/addon-actions";
import Form from "./Form";

export default {
  title: "Form",
  component: "Form",
  argTypes: {
    inputValue: "",
    setInputValue: () => {},
    handleSubmit: () => {},
  },
};

const Template = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
  inputValue: "learn storybook",
  setInputValue: action("Input value"),
  handleSubmit: action("Submit button clicked"),
};
