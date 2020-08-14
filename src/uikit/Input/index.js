import PropTypes from 'prop-types'
import React from 'react';
import 'uikit/Input/Input.css'

const Input = ({label, type, handler, modificator}) => {
  return (
      <div className={`input`}>
        <label className="input__label">
          <span className="input__span">{label}</span>
          <input className="input__elem" onInput={handler} type={type}/>
        </label>
      </div>
  )
};

export default Input;

Input.propTypes = {
  handler: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string
}

Input.defaultProps = {
  handler: Function.prototype,
  label: '',
  type: 'text'
}