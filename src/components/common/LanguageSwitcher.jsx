import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../../styles/components/LanguageSwitcher.module.scss';

const globeIcon = '/assets/images/globe.png';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'ru', label: 'Russian' },
    { code: 'hy', label: 'Armenian' },
  ];

  const toggle = () => setOpen((prev) => !prev);

  const selectLanguage = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  const current = i18n.language.slice(0, 2).toUpperCase();

  return (
    <div className={styles.switcher}>
      <div className={styles.current} onClick={toggle}>
        <img src={globeIcon} alt="language" className={styles.icon} />
        <span className={styles.lang}>{current}</span>
      </div>
      {open && (
        <ul className={styles.dropdown}>
          {languages.map((lng) => (
            <li
              key={lng.code}
              className={styles.option}
              onClick={() => selectLanguage(lng.code)}
            >
              {lng.label} ({lng.code.toUpperCase()})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
