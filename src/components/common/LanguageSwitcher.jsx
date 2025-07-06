import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select onChange={changeLanguage} value={i18n.language}>
      <option value="en">🇬🇧 English</option>
      <option value="ru">🇷🇺 Russian</option>
      <option value="hy">🇦🇲 Armenian</option>
    </select>
  );
};
