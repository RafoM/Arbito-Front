import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authStyles as styles } from '../../../styles/components/headers';
import { LanguageSwitcher } from '../../common/LanguageSwitcher';

const HeaderAuthPages = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <header className={styles.header}>
      <img src="/logo192.png" alt="Logo" className={styles.logo} />
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

export default HeaderAuthPages;
