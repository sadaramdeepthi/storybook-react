import React from "react";
import PropTypes from "prop-types";

const Title = ({ myName }) => {
  return <h1 className="title">{myName}'s Todolist</h1>;
};

Title.propTypes = {
  myName: PropTypes.string.isRequired,
};

export default Title;
