import React from 'react';
import { Link } from 'react-router-dom';
import { FaXTwitter, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.brand}>
          <img src="/assets/images/logo.png" alt="Arbito Logo" className={styles.logo} />
          <p className={styles.slogan}>Trade smarter, Grow faster</p>
        </div>
        <div className={styles.social}>
          <a href="#" aria-label="X" className={styles.icon}><FaXTwitter /></a>
          <a href="#" aria-label="LinkedIn" className={styles.icon}><FaLinkedinIn /></a>
          <a href="#" aria-label="Telegram" className={styles.icon}><FaTelegramPlane /></a>
        </div>
      </div>
      <div className={styles.middleSection}>
        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/features">Features</Link>
          <Link to="/terms">Terms of Service</Link>
        </nav>
        <div className={styles.contact}>
          <h4>Contact Us</h4>
          <a href="tel:+14065550120">+1 (406) 555-0120</a>
          <a href="tel:+14805550103">+1 (480) 555-0103</a>
          <a href="mailto:help@logoipsum.com">help@logoipsum.com</a>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <p>© 2025 Arbito. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
