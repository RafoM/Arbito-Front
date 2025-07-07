import React from 'react';
import styles from '../../styles/components/Topbar.module.scss';

const Topbar = ({ title, actions, className = '' }) => {
  return (
    <div className={`${styles.topbar} ${className}`}>
      <div className={styles.title}>{title}</div>
      <div className={styles.actions}>{actions}</div>
    </div>
  );
};

export default Topbar;
