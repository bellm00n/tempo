import PropTypes from "prop-types";
import React from "react";
import "ui/uikit/Input/input.css";

const Input = ({ label, type, onChange, value, className }) => {
  return (
    <div className={`input ${className}`}>
      <label className="input__label">
        <span className="input__span">{label}</span>
        <input
          className="input__elem"
          onChange={onChange}
          value={value}
          type={type}
        />
      </label>
    </div>
  );
};

export default Input;

Input.propTypes = {
  handler: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  handler: Function.prototype,
  label: "",
  type: "text",
};
