import React from 'react';
import Search from './containers/Search';
import Results from './containers/Results';
import styles from './styles.scss';

const {
  main
} = styles;

const Main = () => (
  <main className={main}>
    <Search />
    <Results />
  </main>
);

export default Main;
