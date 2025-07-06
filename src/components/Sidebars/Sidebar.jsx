import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaBars, FaSignOutAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import styles from '../../styles/components/sidebars/Sidebar.module.scss';

const Sidebar = ({ items = [], collapsed = false, onCollapse }) => {
  const { user } = useSelector((state) => state.auth);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSubmenu = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <aside className={styles.sidebar} data-collapsed={collapsed}>
      <div className={styles.top}>
        <img className={styles.avatar} src={user?.avatar || '/logo192.png'} alt="avatar" />
        {!collapsed && <span className={styles.greeting}>Hey 👋 {user?.username || 'User'}</span>}
        {!collapsed && <FaBars className={styles.collapseToggle} onClick={onCollapse} />}
      </div>
      <nav className={styles.menu}>
        {items.map((item, idx) => (
          item.subItems ? (
            <div key={item.label} className={styles.group}>
              <div
                className={styles.link}
                onClick={() => toggleSubmenu(idx)}
                title={collapsed ? item.label : undefined}
              >
                {item.icon}
                {!collapsed && <span className={styles.label}>{item.label}</span>}
                {!collapsed && (
                  openIndex === idx ? <FaChevronUp className={styles.arrow} /> : <FaChevronDown className={styles.arrow} />
                )}
              </div>
              {openIndex === idx && !collapsed && (
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
              title={collapsed ? item.label : undefined}
            >
              {item.icon}
              {!collapsed && <span className={styles.label}>{item.label}</span>}
            </NavLink>
          )
        ))}
      </nav>
      <button className={styles.logout} title={collapsed ? 'Logout' : undefined}>
        <FaSignOutAlt />
        {!collapsed && <span>Logout</span>}
      </button>
    </aside>
  );
};

export default Sidebar;
