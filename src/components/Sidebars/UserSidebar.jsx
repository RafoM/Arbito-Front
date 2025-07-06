import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaBars, FaUser, FaShareAlt, FaMoneyBill, FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from '../../styles/components/sidebars/UserSidebar.module.scss';

const UserSidebar = () => {
  const [open, setOpen] = useState(true);
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
        <Link to="/settings" className={styles.item}><FaUser /> Personal Information</Link>
        <Link to="/referrals/activity" className={styles.item}><FaShareAlt /> Referral</Link>
        <Link to="/payments/history" className={styles.item}><FaMoneyBill /> Payments</Link>
        <Link to="/notifications" className={styles.item}><FaBell /> Notification</Link>
      </nav>
    </aside>
  );
};

export default UserSidebar;
