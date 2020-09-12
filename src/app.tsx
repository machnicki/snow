import * as React from 'react';
import * as ReactDOM from 'react-dom';

import styles from './app.module.css';
import './global.css';

ReactDOM.render(
  <div className={styles.main}>Hello world</div>,
  document.getElementById('root')
);
