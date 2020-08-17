import PropTypes from "prop-types";
import React from "react";
import { Plus as PlusIcon } from "ui/uikit/Icons";
import "ui/uikit/EmptyCard/emptyCard.css";

const EmptyCard = ({ className, onClickHandler }) => {
  return (
    <button
      className={`empty-card ${className}`}
      onClick={onClickHandler}
      type="button"
    >
      <PlusIcon />
    </button>
  );
};

export default EmptyCard;

EmptyCard.propTypes = {
  className: PropTypes.string,
  onClickHandler: PropTypes.func,
};

EmptyCard.defaultProps = {
  className: "",
  onClickHandler: Function.prototype,
};
