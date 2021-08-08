import React, { useState } from 'react';
import { cx } from '@emotion/css';
import { bool } from 'prop-types';
import { Button } from 'antd'
import * as css from './styles';
import pgLogo from 'assets/images/prime_glass_small_logo.png';

const Navbar = ({ mobile }) => {
  const [displaySideMenu, setDisplaySideMenu] = useState(false);

  const handleScrollTo = (elementId) => () => {
    document.getElementById(elementId).scrollIntoView({behavior: "smooth", block: "start", inline: "start"})
  }

  const handleClickMenu = () => {
    setDisplaySideMenu(true);
  }

  const handleCloseMenu = () => {
    setDisplaySideMenu(false);
  }

  return (
    <div className={css.navbar}>
      <div className={css.navLeft}>
        <img className={css.navLogo} src={pgLogo} alt="logo" />
        <p className={css.navTagline}>Glass for Prime Performance</p>
      </div>
      <ul className={css.navList}>
        <li className={css.navListItem}><a onClick={handleScrollTo('home')}>Home</a></li>
        <li className={css.navListItem}><a onClick={handleScrollTo('aboutUs')}>Tentang Kami</a></li>
        <li className={css.navListItem}><a onClick={handleScrollTo('products')}>Produk Kami</a></li>
        <li className={css.navListItem}>
          <Button><a onClick={handleScrollTo('contact')}>Hubungi Kami</a></Button>
        </li>
      </ul>
      {mobile && (
        <>
          <div className={css.sideMenu} onClick={handleClickMenu} />
          <div className={cx(css.sideNav, { [css.sideNavShow]: displaySideMenu })}>
            <div className={css.sideNavClose} onClick={handleCloseMenu} />
            <ul>
              <li className={css.sideNavItem}><a onClick={handleScrollTo('home')}>Home</a></li>
              <li className={css.sideNavItem}><a onClick={handleScrollTo('aboutUs')}>Tentang Kami</a></li>
              <li className={css.sideNavItem}><a onClick={handleScrollTo('products')}>Produk Kami</a></li>
              <li className={css.sideNavItem}>
                <Button><a href="#contact">Hubungi Kami</a></Button>
              </li>          
            </ul>
          </div>        
        </>
      )}
    </div>
  )
}

Navbar.propTypes = {
  mobile: bool.isRequired,
}

export default Navbar;