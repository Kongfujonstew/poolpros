import React from 'react';
import Contact from './components/Contact';
import Bottom from './components/Bottom';
import styles from './styles.scss';

const {
  footer
} = styles;

export default () => (
  <footer className={footer}>
    <Contact />
    <Bottom />
  </footer>
);
