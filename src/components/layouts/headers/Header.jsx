import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { landingStyles, authStyles, mainStyles } from '../../../styles/components/headers';
import { LanguageSwitcher } from '../../common/LanguageSwitcher';

const variantStyles = {
  landing: landingStyles,
  auth: authStyles,
  main: mainStyles,
};

const navLinks = (
  <>
    <Link to="/Tools">Tools</Link>
    <Link to="/About">About</Link>
    <Link to="/Learn">Learn</Link>
    <Link to="/Plans">Plans</Link>
    <Link to="/Blog">Blog</Link>
  </>
);

const Header = ({ variant = 'main' }) => {
  const { user } = useSelector((state) => state.auth);
  const styles = variantStyles[variant] || mainStyles;

  if (variant === 'auth') {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src="/assets/images/header_logo.svg" alt="Logo" className={styles.logo}/>
                <img src="/assets/images/arbito.svg" alt="Arbito" className={styles.compName}/>
            </div>


            <div className={styles.actions}>
                <LanguageSwitcher/>
                {navLinks}
                {user ? (
                    <img src={user.avatar || '/logo192.png'} alt="Avatar" className={styles.avatar}/>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register" className={styles.cta}>Get Started</Link>
                    </>
                )}
            </div>
        </header>
    );
  }

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src="/assets/images/header_logo.svg" alt="Logo" className={styles.logo}/>
                <img src="/assets/images/arbito.svg" alt="Arbito" className={styles.compName}/>
            </div>
            <div className={styles.left}>

                <nav className={styles.nav}>{navLinks}</nav>
            </div>
            <div className={styles.actions}>
                <LanguageSwitcher/>
                {user ? (
                    <>
                        <img src="/assets/images/bell-notification.png" alt="Notification"/>
                        <img src={user.avatar || '/assets/images/Avatar.png'} alt="Avatar" className={styles.avatar}/>
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

export default Header;
