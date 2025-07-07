import React from 'react';
import styles from '../../styles/components/Modal.module.scss';

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;

  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={stopPropagation}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
