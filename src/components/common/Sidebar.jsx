import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../styles/components/Sidebar.module.scss';

const Sidebar = ({ items = [] }) => {
  return (
    <aside className={styles.sidebar}>
      {items.map((item) => (
        <NavLink key={item.label} to={item.to} className={styles.link}>
          {item.label}
        </NavLink>
      ))}
    </aside>
  );
};

export default Sidebar;
