import React from 'react';
import styles from '../../styles/components/Input.module.scss';

const Input = ({ label, className = '', ...props }) => {
  return (
    <label className={`${styles.wrapper} ${className}`}>
      {label && <span className={styles.label}>{label}</span>}
      <input className={styles.input} {...props} />
    </label>
  );
};

export default Input;
