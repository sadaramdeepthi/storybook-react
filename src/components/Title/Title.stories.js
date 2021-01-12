import React from "react";
import { storiesOf } from "@storybook/react";
import Title from "./Title";

const defaultProps = {
  myName: "",
};

const populatedProps = {
  myName: "React",
};

storiesOf("Title", module)
  .add("default", () => <Title {...defaultProps} />)
  .add("populated", () => <Title {...populatedProps} />);
