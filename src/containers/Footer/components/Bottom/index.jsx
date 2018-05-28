import React from 'react';
import styles from './styles.scss';

const {
  container1,
  container2
} = styles;

export default () => (
  <section>
    <div className={container1}>
      <span>Dealers and Distributors</span>
      <span>|</span>
      <div>
        <span>Commercial Service</span>
      </div>
    </div>
    <div className={container2}>
      <span>&copy; 2017 Pool Pros</span>
      <span>Privacy Policy</span>
      <span>Terms and Conditions</span>
    </div>

  </section>
);
