import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const {
  checkbox,
  checked,
  div,
  grey,
  notChecked,
  span
} = styles;

const Checkbox = props => (
  <div
    className={div}
    onClick={() => props.handleClick(props.field)}
  >
    <div
      className={props.isChecked ?
        `${checked} ${checkbox}` :
        `${notChecked} ${checkbox} ${props.grey ? grey : ''}`}
    />
    <span className={span}>{props.field}</span>
  </div>
);

Checkbox.propTypes = {
  grey: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
  field: PropTypes.string.isRequired
};

Checkbox.defaultProps = {
  grey: false
};

export default Checkbox;
