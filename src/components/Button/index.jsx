import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const {
  button,
  image,
  lightBlue
} = styles;

const Button = (props) => {
  const { handleClick, imageAlt, imageSrc, light, text } = props;
  return (
    <div className={`${button} ${light ? lightBlue : ''}`}
      onClick={handleClick}
    >
      <img className={image} src={imageSrc} alt={imageAlt} />
      <span>{text}</span>
    </div>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

Button.defaultProps = {
  handleClick: () => console.log('no onClick defined'),
  imageAlt: 'a great image'
};

export default Button;
