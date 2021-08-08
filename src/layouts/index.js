import React from 'react';
import MainPage from '../pages';

import '../styles/style.css';
import { wrapper } from './styles';

const Layout = () => {
  return (
    <div className={wrapper}>
      <MainPage />
    </div>
  );
}

export default Layout;