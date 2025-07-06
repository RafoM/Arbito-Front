import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { landingStyles as styles } from '../../../styles/components/headers';

const HeaderLanding = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img src="/logo192.png" alt="Logo" className={styles.logo} />
        <nav className={styles.nav}>
          <Link to="/features">Features</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/cases">Cases</Link>
          <Link to="/tutorials">Tutorials</Link>
        </nav>
      </div>
      <div className={styles.actions}>
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

export default HeaderLanding;
