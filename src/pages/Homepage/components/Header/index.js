import React from 'react';
import * as css from './styles';

const Header = () => {
  return (
    <>
    <div id="home" className={css.headerWrapper}>
      <div className={css.headerContent}>
        <h1 className={css.headerTitle}>Glass for Prime Performance</h1>
        <p className={css.headerText}>
          Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className={css.headerOverlay} />
    </div>
    </>
  )
}

export default Header;