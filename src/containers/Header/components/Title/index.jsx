import React from 'react';
import Button from 'components/Button';
import styles from './styles.scss';

const {
  button,
  container2,
  container3,
  image1,
  image2,
  relative,
  section,
  span
} = styles;

export default (props) => (
  <section className={section}>
    <div >
      <img className={image1} src="images/pool-pros-logo.png" alt="pool-pros-logo" />
    </div>
    <div className={container2}>
      <span className={span}>
        Pools & Spas
      </span>

      <span className={span}>
        Supplies
      </span>

      <span className={span}>
        Resources
      </span>
      <span className={span}>
        Services
      </span>
      <Button
        className={button}
        text="Find a Pool Pro"
        imageSrc="images/location-icon.png"
        imageAlt="location icon"
      />
    </div>
    <div className={container3}>
      <div>
        <Button
          className={button}
          text="Find a Pool Pro"
          imageSrc="images/location-icon.png"
          imageAlt="location icon"
        />
      </div>
      <div className={relative}>
        <img
          onClick={props.toggleMenu}
          className={image2}
          src="images/menu-icon-mobile.png"
          alt="menu icon"
        />
      </div>
    </div>
  </section>
);
