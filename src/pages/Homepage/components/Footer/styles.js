import { css } from '@emotion/css';
import { white, darkGreen } from 'styles/colors';
import { mediaQuery } from 'styles/media';
import { fs12, fs14 } from 'styles/font';
import iconGps from 'assets/icons/gps-white.svg';
import iconEmail from 'assets/icons/email-white.svg';
import iconPhone from 'assets/icons/phone-white.svg';
import imageFooter from 'assets/images/image_footer.png';

export const footerWrapper = css`
  position: relative;
  padding: 52px 64px 24px;
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0%, rgba(4,103,69,1) 100%);
  color: ${white};

  ${mediaQuery(`
    padding: 32px 16px;
  `)}    
`;

export const footerOverlay = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url(${imageFooter}) no-repeat center;
  background-size: cover;
  opacity: .5;
`;

export const footerNote = css`
  position: relative;
  z-index: 1;
  max-width: 1150px;
  margin: 0 auto;
  padding-top: 24px;
  border-top: .1px solid rgba(255,255,255,.2);
  font-size: 14px;

  ${mediaQuery(`
    font-size: ${fs12};
  `)}    
`;

export const footerInfo = css`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 100px;
  max-width: 1150px;
  margin: 0 auto 100px;
  z-index: 1;    

  ${mediaQuery(`
    flex-direction: column;
    margin-bottom: 32px;
  `)}      
`;

export const footerContent = css`
  font-weight: 300;
  max-width: 400px;

  :last-child {
    margin-right: 0;
  }

  ${mediaQuery(`
    margin-bottom: 32px;
    font-size: ${fs14};
  `)}     
`;

export const footerLogo = css`
  height: 60px;
  margin-bottom: 10px;
`;

export const footerListItem = css`
  margin-bottom: 16px;

  a {
    color: ${white};
    font-weight: 400;
  }   
`;

export const footerAddress = css`
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;

  ::before {
    content: "";
    display: inline-block;
    height: 24px;
    width: 24px;
    margin-top: 4px;
    margin-right: 12px;
    background: url(${iconGps}) center no-repeat;
    background-size: contain;
    flex-shrink: 0;
  }
`;

export const footerEmail = css`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  ::before {
    content: "";
    display: inline-block;
    height: 20px;
    width: 20px;
    margin-right: 12px;
    background: url(${iconEmail}) center no-repeat;
    background-size: contain;
  }
`;

export const footerPhone = css`
  display: flex;
  align-items: center;

  ::before {
    content: "";
    display: inline-block;
    height: 20px;
    width: 20px;
    margin-right: 12px;
    background: url(${iconPhone}) center no-repeat;
    background-size: contain;
  }
`;

export const footerTitle = css`
  margin-bottom: 16px;
  font-weight: 400;
`;