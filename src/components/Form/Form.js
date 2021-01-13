import React from "react";
import PropTypes from "prop-types";

const Form = ({ inputValue, setInputValue, handleSubmit }) => {
  return (
    <div className="form">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="input"
        placeholder={"Type here..."}
      />
      <button onClick={handleSubmit} className="submit">
        Submit
      </button>
    </div>
  );
};

Form.propTypes = {
  inputValue: PropTypes.string,
  setInputValue: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default Form;
