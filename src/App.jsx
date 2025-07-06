import React from 'react';
import AppRouter from './routes/AppRouter';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { UIProvider } from './contexts/UIContext';
import './styles/index.scss';

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <UIProvider>
          <AppRouter />
        </UIProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
