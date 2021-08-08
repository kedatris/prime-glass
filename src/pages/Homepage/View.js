import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'antd/dist/antd.css';

const Homepage = () => {
  const wrapperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    const width = wrapperRef.current.offsetWidth;

    if (width < 769) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [isMobile]);

  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  useLayoutEffect(() => {
    handleResize();
  }, [handleResize]);

  return (
    <div ref={wrapperRef}>
      <Navbar mobile={isMobile} />
      <Header />
      <About />
      <Products mobile={isMobile} />
      <Contact mobile={isMobile} />
      <Footer/>
    </div>
  )
}

export default Homepage;