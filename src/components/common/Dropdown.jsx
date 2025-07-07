import React, { useState } from 'react';
import styles from '../../styles/components/Dropdown.module.scss';

const Dropdown = ({ options = [], value, onChange, placeholder = 'Select', className = '' }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (val) => {
    onChange && onChange(val);
    setOpen(false);
  };

  const selected = options.find((opt) => opt.value === value);

  return (
    <div className={`${styles.dropdown} ${className}`}>
      <div className={styles.toggle} onClick={() => setOpen((p) => !p)}>
        {selected ? selected.label : placeholder}
      </div>
      {open && (
        <ul className={styles.menu}>
          {options.map((opt) => (
            <li key={opt.value} onClick={() => handleSelect(opt.value)} className={styles.option}>
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
