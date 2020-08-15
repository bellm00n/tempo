import PropTypes from "prop-types";
import React from "react";
import "uikit/Link/link.css";

const Link = ({ href, children, className, target }) => {
  return (
    <a href={href} target={target} className={`link ${className}`}>
      {children}
    </a>
  );
};

export default Link;

Link.propTypes = {
  className: PropTypes.any,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
};

Link.defaultProps = {
  className: "",
  target: "",
};
