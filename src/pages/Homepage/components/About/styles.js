import { css } from '@emotion/css';
import { darkGreen, white } from 'styles/colors';
import { mediaQuery } from 'styles/media';
import { fs16, fs22 } from 'styles/font';
import imageAbout from 'assets/images/image_about.jpg';

export const contentWrapper = css`
  position: relative;
  background: url(${imageAbout}) no-repeat center;
  padding: 100px 64px;
  height: 80vh;

  ${mediaQuery(`
    padding: 32px 16px;
    height: 500px;
  `)}   
`;

export const contentOverlay = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(2,0,36);
  background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(4,103,69,1) 0%, rgba(0,0,0,1) 90%);
  opacity: .9;
`;

export const aboutWrapper = css`
  position: relative;
  top: 35%;
  transform: translateY(-35%);
  max-width: 1150px;
  margin: 0% auto;
  text-align: center;
  z-index: 1;

  ${mediaQuery(`
    margin: 0;
    width: 100%;  
  `)}
`;

export const aboutTitle = css`
  font-size: 32px;
  margin-bottom: 32px;
  font-weight: 600;
  color: ${white};

  ${mediaQuery(`
    font-size: ${fs22};
    margin-bottom: 16px;
  `)}  
`;

export const aboutText = css`
  font-size: 20px;
  font-weight: 300;
  margin: 0 auto;
  max-width: 800px;
  color: ${white};

  ${mediaQuery(`
    font-size: ${fs16};
  `)}    
`;