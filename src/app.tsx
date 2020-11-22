import React from 'react';
import ReactDOM from 'react-dom';

import Intro from './intro';

import styles from './app.module.css';
import './global.css';

ReactDOM.render(
  <div className={styles.main}>
    <Intro />
  </div>,
  document.getElementById('root')
);
