import React from 'react';
import styles from '../../styles/components/Button.module.scss';

const Button = ({ children, className = '', type = 'button', ...props }) => {
  return (
    <button type={type} className={`${styles.button} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
