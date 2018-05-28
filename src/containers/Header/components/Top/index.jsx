import React from 'react';
import styles from './styles.scss';

const {
  section,
  span
} = styles;

export default () => (
  <section className={section}>
    <span className={span}>
      Dealers and Distributors
    </span>
    <span style={{ marginRight: '8px' }} className={span}>
      Commercial Service
    </span>
  </section>
);
