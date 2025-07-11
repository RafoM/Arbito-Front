import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetAvailableLanguagesQuery } from '../../store/api/contentApi';
import styles from '../../styles/components/LanguageSwitcher.module.scss';

const globeIcon = '/assets/images/globe.png';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const { data: languages, isLoading, isError } = useGetAvailableLanguagesQuery();

  const toggle = () => setOpen((prev) => !prev);

  const selectLanguage = (code) => {
    i18n.changeLanguage(code.toLowerCase());
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
          {isLoading && (
            <li className={styles.option}>Loading...</li>
          )}
          {isError && (
            <li className={styles.option}>Failed to load</li>
          )}
          {!isLoading && !isError &&
            Array.isArray(languages) &&
            languages.map((lng) => (
              <li
                key={lng.cultureCode}
                className={styles.option}
                onClick={() => selectLanguage(lng.cultureCode)}
              >
                {lng.displayName} ({lng.cultureCode})
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};
