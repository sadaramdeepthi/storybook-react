import React from "react";
import { storiesOf } from "@storybook/react";
import Form from "./Form";

const defaultProps = {
  inputValue: "",
  setInputValue: () => {},
  handleSubmit: () => {},
};

const populatedProps = {
  inputValue: "learn storybook",
  setInputValue: () => {},
  handleSubmit: () => {},
};

storiesOf("Form", module)
  .add("default", () => <Form {...defaultProps} />)
  .add("populated", () => <Form {...populatedProps} />);
