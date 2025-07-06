import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  FaSignOutAlt,
  FaChevronDown,
  FaChevronUp,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import styles from '../../styles/components/sidebars/Sidebar.module.scss';

const Sidebar = ({ items = [] }) => {
  const { user } = useSelector((state) => state.auth);
  const [openIndex, setOpenIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  const toggleSubmenu = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <aside className={styles.sidebar} data-collapsed={!isOpen}>
      <div className={styles.top}>
        <img className={styles.avatar} src={user?.avatar || '/logo192.png'} alt="avatar" />
        {isOpen && <span className={styles.greeting}>Hey 👋 {user?.username || 'User'}</span>}
          {isOpen ? (
              <FaChevronLeft className={styles.collapseToggle} onClick={toggleSidebar} />
          ) : (
              <FaChevronRight className={styles.expandToggle} onClick={toggleSidebar} />
          )}      </div>
      <nav className={styles.menu}>
        {items.map((item, idx) => (
          item.subItems ? (
            <div key={item.label} className={styles.group}>
              <div
                className={styles.link}
                onClick={() => toggleSubmenu(idx)}
                title={!isOpen ? item.label : undefined}
              >
                {item.icon}
                {isOpen && <span className={styles.label}>{item.label}</span>}
                {isOpen && (
                  openIndex === idx ? <FaChevronUp className={styles.arrow} /> : <FaChevronDown className={styles.arrow} />
                )}
              </div>
              {openIndex === idx && isOpen && (
                <div className={styles.submenu}>
                  {item.subItems.map((sub) => (
                    <NavLink
                      key={sub.label}
                      to={sub.to}
                      className={({ isActive }) => `${styles.sublink} ${isActive ? styles.active : ''}`}
                    >
                      {sub.icon}
                      <span>{sub.label}</span>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
              title={!isOpen ? item.label : undefined}
            >
              {item.icon}
              {isOpen && <span className={styles.label}>{item.label}</span>}
            </NavLink>
          )
        ))}
      </nav>
      <button className={styles.logout} title={!isOpen ? 'Logout' : undefined}>
        <FaSignOutAlt />
        {isOpen && <span>Logout</span>}
      </button>
      {/*{!isOpen && (*/}
      {/*  <FaChevronRight className={styles.expandToggle} onClick={toggleSidebar} />*/}
      {/*)}*/}
    </aside>
  );
};

export default Sidebar;
