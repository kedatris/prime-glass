import React from 'react';
import * as css from './styles';

const About = () => {
  return (
    <div id="aboutUs" className={css.contentWrapper}>
      <div className={css.contentOverlay} />
      <div className={css.aboutWrapper}>
        <h3 className={css.aboutTitle}>Tentang Kami</h3>
        <p className={css.aboutText}>
          <strong>Prime Glass</strong> adalah penyedia produk dan layanan dibidang pekerjaan Kaca, Aluminium, dan Besi untuk perumahan dan gedung. 
          Dengan berkomitmen memudahkan dan memberikan keuntungan bagi konsumen, kami selalu mengedepankan layanan yang cepat tanggap 
          dan selalu memiliki standar produk yang kuat, tahan lama serta bernilai estetik tinggi sesuai konsep dari bangunan konsumen.
        </p>
      </div>
    </div>
  );
}

export default About;