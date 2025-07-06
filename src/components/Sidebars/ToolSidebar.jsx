import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from '../../styles/components/sidebars/ToolSidebar.module.scss';

const ToolSidebar = () => {
  const [open, setOpen] = useState(true);
  const [screenerOpen, setScreenerOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);

  return (
    <aside className={styles.sidebar} data-open={open}>
      <div className={styles.header}>
        <div className={styles.userInfo}>
          <img className={styles.avatar} src={user?.avatar || '/logo192.png'} alt="avatar" />
          <span>Hey 👋, {user?.username || 'User'}</span>
        </div>
        <FaBars className={styles.toggle} onClick={() => setOpen((o) => !o)} />
      </div>
      <nav className={styles.menu}>
        <div className={styles.item}>
          <div className={styles.link} onClick={() => setScreenerOpen((o) => !o)}>Screener</div>
          {screenerOpen && (
            <div className={styles.submenu}>
              <Link to="/screener/web" className={styles.sublink}>Web Version</Link>
              <Link to="/screener/templates" className={styles.sublink}>Templates</Link>
              <Link to="/screener/screeners" className={styles.sublink}>Screeners</Link>
              <Link to="/screener/notifications" className={styles.sublink}>Notification Templates</Link>
            </div>
          )}
        </div>
        <div className={styles.item}>
          <Link to="/scanner" className={styles.link}>Scanner</Link>
        </div>
      </nav>
    </aside>
  );
};

export default ToolSidebar;
