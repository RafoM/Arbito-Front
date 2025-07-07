import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authStyles as styles } from '../../../styles/components/headers';
import { LanguageSwitcher } from '../../common/LanguageSwitcher';

const HeaderAuthPages = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <header className={styles.header}>
            <img src="/assets/images/header_logo.png" alt="Logo" className={styles.logo}/>
            <div className={styles.actions}>
                <LanguageSwitcher/>
                <Link to="/Tools">Tools</Link>
                <Link to="/About">About</Link>
                <Link to="/Learn">Learn</Link>
                <Link to="/Plans">Plans</Link>
                <Link to="/Blog">Blog</Link>
                {user ? (
                    <>
                        <img src={user.avatar || '/logo192.png'} alt="Avatar" className={styles.avatar}/>
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
