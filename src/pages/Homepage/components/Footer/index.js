import React, { memo } from 'react';
import * as css from './styles';
import imageLogo from 'assets/images/prime_glass_small_logo.png';

const Footer = () => {
  const handleScrollTo = (elementId) => () => {
    document.getElementById(elementId).scrollIntoView({behavior: "smooth", block: "start", inline: "start"})
  }

  return (
    <div className={css.footerWrapper}>
      <div className={css.footerOverlay} />
      <div className={css.footerInfo}>
        <div className={css.footerContent}>
          <img className={css.footerLogo} src={imageLogo} alt="logo" />
          <p>
            <strong>Prime Glass</strong> adalah penyedia produk dan layanan dibidang pekerjaan Kaca, Aluminium, dan Besi untuk perumahan dan gedung. 
          </p>
        </div>
        <div className={css.footerContent}>
          <ul>
            <li className={css.footerListItem}><a onClick={handleScrollTo('home')}>Home</a></li>
            <li className={css.footerListItem}><a onClick={handleScrollTo('aboutUs')}>Tentang Kami</a></li>
            <li className={css.footerListItem}><a onClick={handleScrollTo('products')}>Produk Kami</a></li>
          </ul>
        </div>
        <div className={css.footerContent}>
          <div className={css.footerTitle}>Hubungi Kami</div>
          <div className={css.footerAddress}>Jl. Padat Karya No.13, Kp. Nangewer 2 Kel. Nagrak, Kec. Gunung Putri, Kab. Bogor</div>
          <div className={css.footerEmail}>primeglass18@gmail.com</div>
          <div className={css.footerPhone}>0878 7663 8037 (Call/WA)</div>
        </div>
      </div>
      <p className={css.footerNote}>Copyright © 2021 primeglass.id | <a href="https://www.freepik.com/vectors/web" target="_blnank" rel="noreferrer">Illustration by Freepik</a></p>
    </div>
  );
};

export default memo(Footer);
