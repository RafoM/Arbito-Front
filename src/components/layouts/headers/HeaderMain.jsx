import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { mainStyles as styles } from '../../../styles/components/headers';
import { LanguageSwitcher } from '../../common/LanguageSwitcher';

const HeaderMain = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img src="/assets/images/header_logo.png" alt="Logo" className={styles.logo} />
        <nav className={styles.nav}>
            <Link to="/Tools">Tools</Link>
            <Link to="/About">About</Link>
            <Link to="/Learn">Learn</Link>
            <Link to="/Plans">Plans</Link>
            <Link to="/Blog">Blog</Link>
        </nav>
      </div>
      <div className={styles.actions}>
        <LanguageSwitcher />
        {user ? (
          <>
            <Link to="/notifications">Notifications</Link>
            <img src={user.avatar || '/logo192.png'} alt="Avatar" className={styles.avatar} />
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register" className={styles.cta}>Get Started</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default HeaderMain;
