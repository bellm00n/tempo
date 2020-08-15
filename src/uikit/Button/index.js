import PropTypes from "prop-types";
import React from "react";
import "uikit/Button/button.css";

const Button = ({ children, className, disabled }) => {
  return (
    <button type="button" disabled={disabled} className={`button ${className}`}>
      <span className="button__inner" tabIndex="-1">
        {children}
      </span>
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  className: "",
  disabled: false,
};
