import React from 'react';
import { cx } from '@emotion/css';
import { Scene, Controller } from 'react-scrollmagic';
import * as css from './styles';
import image1 from 'assets/images/image_1.jpg';
import image2 from 'assets/images/image_2.jpg';
import image3 from 'assets/images/image_3.jpg';
import image4 from 'assets/images/image_4.jpg';
import image5 from 'assets/images/image_5.jpg';

const Products = ({ mobile }) => {
  return (
    <div id="products" className={css.contentWrapper}>
      <div className={css.contentHeader}>
        <h3 className={css.contentTitle}>Produk Kami</h3>
        <p className={css.contentCaption}>
          Beberapa fokus produk yang kami produksi adalah kusen, pintu dan jendela aluminium, pintu dan partisi kaca, 
          shower box dan shower screen,	railling dan balkon kaca, kanopi kaca dan skylight.
        </p>
      </div>
      <Controller>
        <div className={css.productWrapper}>
          {!mobile && (
            <Scene duration={1500} triggerHook="onEnter" classToggle={css.showImage}>
              <img className={css.productImage} src={image1} alt='Pintu dan Jendela Aluminium' />
            </Scene>
          )}
          <div className={cx(css.productInfo, css.productInfo1)}>          
            <h3 className={css.productTitle}>Pintu dan Jendela Aluminium</h3>
            {mobile && <img className={css.productImage} src={image1} alt='Pintu dan Jendela Aluminium' />}
            <p>
              Aluminium merupakan material yang tahan lama dan tahan karat, sehingga sangat cocok dijadikan pilihan sebagai Kusen, Frame Pintu atau Jendela pada bangunan di iklim tropis 
              seperti di Indonesia. Prime Glass memberikan keuntungan pada konsumen dengan menawarkan berbagai model jenis dan kualitas produk aluminium yang kami miliki. 
            </p>
            <p>
              Konsumen bisa berkonsultasi gratis untuk menyesuaikan model dan budget yang diinginkan, kami pun siap melakukan layanan survey gratis untuk menentukan estimasi 
              harga yang lebih akurat sekaligus memberikan pandangan teknis dan estetika yang tepat dengan mengikuti acuan konsep bangunan konsumen.
            </p>
          </div>
          <Scene duration={1500} triggerHook="onEnter" classToggle={css.move}>
            <h3 className={ css.productOverlayText1}>Aluminium</h3>
          </Scene>
        </div>
        <div className={css.productWrapper}>        
          <div className={cx(css.productInfo, css.productInfo2)}>
            <h3 className={css.productTitle}>Pintu dan Partisi Kaca Frameless</h3>
            {mobile && <img className={css.productImageRight} src={image2} alt='Pintu dan Partisi Kaca Frameless' />}
            <p>
              Kesan pertama yang ditampilkan dari partisi dan pintu kaca frameless adalah Elegan dan Modern. Produk kami Menggunakan Material kaca 10 atau 12 mm Tempered 
              untuk menjamin kekuatan dan keamanannya.
            </p>
            <p>
              Tempered adalah proses ulang kaca dengan cara dipanaskan sampai suhu ribuan derajat yang kemudian didinginkan secara cepat untuk menghasilkan kekuatan kaca lebih kuat 
              kira-kira 5 kali lipat lebih kuat dari pada kaca biasa dan lebih aman ketika terjadi kaca pecah, karena kaca akan hancur menjadi bagian kecil-kecil yang relatif lebih 
              aman apabila kontak dengan badan.
            </p>
          </div>
          {!mobile && (
            <Scene duration={1500} triggerHook="onEnter" classToggle={css.showImageRight}>
              <img className={css.productImageRight} src={image2} alt='Pintu dan Partisi Kaca Frameless' />
            </Scene>
          )}
        </div>
        <div className={css.productWrapper}>  
          {!mobile && (
            <Scene duration={1500} triggerHook="onEnter" classToggle={css.showImage}>
              <img className={css.productImage} src={image3} alt='Shower Screen /Shower Box' />   
            </Scene>   
          )}
          <div className={cx(css.productInfo, css.productInfo3)}>
            <h3 className={css.productTitle}>Shower Screen /Shower Box</h3>
            {mobile && <img className={css.productImage} src={image3} alt='Shower Screen /Shower Box' />}
            <p>
              Shower Screen atau Shower box adalah partisi antara area shower dan area kering pada kamar mandi. Material yang kami gunakan adalah kaca tempered 8-10 mm.
            </p>
            <p>
              Penggunaan Aksesoris berbahan Stainless 304 menjadi standar untuk area basah seperti kamar mandi, kami selalu berkomitmen menggunakan Aksesoris yang berdaya 
              tahan tinggi untuk memastikan keamanan dan kekuatan pada produk kami yang satu ini.
            </p>
          </div>
          <Scene duration={1500} triggerHook="onEnter" classToggle={css.move}>
            <h3 className={css.productOverlayText2}>Kaca Frameless</h3>
          </Scene>
        </div>
        <div className={css.productWrapper}>        
          <div className={cx(css.productInfo, css.productInfo4)}>
            <h3 className={css.productTitle}>Railling dan Balkon Kaca</h3>
            {mobile && <img className={css.productImageRight4} src={image4} alt='Railling dan Balkon Kaca' />}
            <p>
              Kaca merupakan salah satu komponen yang merefleksikan sifat elegan, mewah, dan modern pada suatu bangunan. Penggunan kaca pada railling atau balkon pada suatu 
              bangunan tidak hanya menambah nilai estetik, tetapi juga sebagai sebuah pilihan bagi anda yang mengutamakan material yg minim perawatan serta tahan lama.
            </p>
            <p>
              Railing dan Balkon produk kami menggunakan kaca dengan ketebalan 8-10 mm Tempered yang dibingkai dengan rangka Hollow atau pipa berbahan Stainless yang tahan karat.
            </p>
          </div>
          {!mobile && (
            <Scene duration={1500} triggerHook="onEnter" classToggle={css.showImageRight}>
              <img className={css.productImageRight4} src={image4} alt='Railling dan Balkon Kaca' />
            </Scene>
          )}
        </div> 
        <div className={css.productWrapper}>    
          {!mobile && (
            <Scene duration={1500} triggerHook="onEnter" classToggle={css.showImage}>
              <img className={css.productImage} src={image5} alt='Kanopi Kaca dan Skylight' />
            </Scene>
          )} 
          <div className={cx(css.productInfo, css.productInfo5)}>
            <h3 className={css.productTitle}>Kanopi Kaca dan Skylight</h3>
            {mobile && <img className={css.productImage} src={image5} alt='Kanopi Kaca dan Skylight' />}
            <p>
              Salah satu trend bangunan saat ini adalah menciptakan hunian yang hemat energi, lagi-lagi kaca sangat dibutuhkan untuk melengkapi konsep hunian masa kini.
            </p>
            <p>
              Pengaplikasian kaca pada kanopi atau utamanya skylight pada ruangan dalam rumah, memungkinkan cahaya matahari masuk secara maksimal ke area tersebut, sehingga 
              membuat pemakaian lampu atau listrik pada siang hari menjadi lebih hemat.
            </p>
            <p>
              Untuk Kanopi dan Skylight kami menggunakan kaca tempered atau laminated dengan ketebalan 8, 10, dan 12 mm dan rangka besi Hollow galvanized ukuran 5 x 10 cm 
              dengan tebal plat minimal 1.2 mm.
            </p>
          </div>
          <Scene duration={1500} triggerHook="onEnter" classToggle={css.move}>
            <h3 className={css.productOverlayText3}>Tempered</h3>
          </Scene>
        </div>           
      </Controller>
    </div>
  )
}

export default Products;