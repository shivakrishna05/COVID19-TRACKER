import React from 'react';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <ul>
          <li className={styles.list}>
            <a className={styles.anchor} href='/'>
              COVID-19
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
