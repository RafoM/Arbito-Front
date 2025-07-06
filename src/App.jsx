import React from 'react';
import AppRouter from './routes/AppRouter';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { UIProvider } from './contexts/UIContext';
import { LanguageSwitcher } from './components/common/LanguageSwitcher';

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <UIProvider>
          <LanguageSwitcher />
          <AppRouter />
        </UIProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
