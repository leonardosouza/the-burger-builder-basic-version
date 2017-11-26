import React from 'react';
import Aux from '../../hoc/Aux.js';
import styles from './Layout.css';

const Layout = props => (
  <Aux>
    <header className={styles.Header}>Toolbar, Sidedrawer, Backdrop</header>
    <main className={styles.Main}>{props.children}</main>
    <footer className={styles.Footer}>Footer Here</footer>
  </Aux>
);

export default Layout;


