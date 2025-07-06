import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div>
      <header>Header (Nav)</header>
      <main><Outlet /></main>
      <footer>Footer</footer>
    </div>
  );
};
