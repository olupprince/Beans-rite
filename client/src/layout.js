import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header'
import HomeHeader from './HomeHeader';

function Layout () {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return(
    <main>
      {isHomePage ? <HomeHeader /> : <Header />}
      <Outlet />
    </main>
  )
}

export default Layout;
