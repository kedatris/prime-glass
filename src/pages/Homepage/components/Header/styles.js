import { css } from "@emotion/css";
import { white, black } from 'styles/colors';
import { mediaQuery } from 'styles/media';
import { fs16, fs22 } from 'styles/font';
import imageHeader from 'assets/images/image_header.jpg';

export const headerWrapper = css`
  position: relative;
  padding: 64px;
  height: 100vh;
  background: url(${imageHeader}) no-repeat center;
  background-size: cover;

  ${mediaQuery(`
    padding: 0;
  `)}  
`;

export const headerOverlay = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${black};
  opacity: .8;
`;

export const headerContent = css`
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-20%, -50%);
  max-width: 550px;
  z-index: 1;

  ${mediaQuery(`
    top: 30%;
    transform: translate(-20%, -30%);
  `)}    
`;

export const headerTitle = css`
  font-size: 38px;
  text-shadow: 1px 1px #b2b2b2;
  color: ${white};

  ${mediaQuery(`
    font-size: ${fs22};
  `)}      
`;

export const headerText = css`
  margin: 16px 0; 
  font-size: 20px;
  font-weight: 300;
  text-shadow: 1px 1px #b2b2b2;
  color: ${white};

  ${mediaQuery(`
    font-size: ${fs16};
  `)}     
`;