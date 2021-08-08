import { css } from '@emotion/css';
import { mediaQuery } from 'styles/media';
import { fs14, fs22 } from 'styles/font';

export const contentWrapper = css`
  margin: 0 auto;
  padding: 64px 0;
  text-align: center;
  min-height: 100vh;
  background-color: #e6fff5;

  ${mediaQuery(`
    padding: 32px 16px;
    min-height: inherit;
  `)}  
`;

export const contentHeader = css`
  max-width: 700px;
  margin: 0 auto 48px;
`;

export const contentTitle = css`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 8px;

  ${mediaQuery(`
    font-size: ${fs22};
  `)}
`;

export const contentCaption = css`
  margin-bottom: 124px;

  ${mediaQuery(`
    font-size: ${fs14};
    margin-bottom: 0;
  `)}
`;

export const productWrapper = css`
  position: relative;
  display: flex;
  align-items: flex-start;
  min-height: 600px;
  max-width: 1300px;
  margin: 0 auto;
  opacity: 1;
  transition: .2s all ease-in-out;

  ${mediaQuery(`
    flex-direction: column;
    min-height: inherit;
  `)}  
`;

export const productTitle = css`
  position: relative;
  font-size: 38px;
  margin-bottom: 16px;
  line-height: 1.4;

  ${mediaQuery(`
    font-size: 20px;
  `)}
`;

export const productImage = css`
  position: absolute;
  left: -1000px;
  height: 380px;
  opacity: 0;
  z-index: 2;
  transition: all 1s cubic-bezier(0.71, 0.03, 0.15, 0.95);

  ${mediaQuery(`
    position: initial;
    opacity: 1;
    margin-bottom: 24px;
    width: 100%;
    height: auto;
  `)}  
`;

export const productImageRight = css`
  position: absolute;
  right: -1000px;
  height: 380px;
  opacity: 0;
  z-index: 2;
  transition: all 1s cubic-bezier(0.71, 0.03, 0.15, 0.95);

  ${mediaQuery(`
    position: initial;  
    width: 100%;
    height: auto;
    opacity: 1;
    margin-bottom: 24px;
  `)}  
`;

export const productImageRight4 = css`
  position: absolute;
  right: -1000px;
  height: 380px;
  width: 850px;
  object-fit: cover;
  opacity: 0;
  z-index: 2;
  transition: all 1s cubic-bezier(0.71, 0.03, 0.15, 0.95);

  ${mediaQuery(`
    position: initial;  
    width: 100%;
    height: auto;
    opacity: 1;
    margin-bottom: 24px;
  `)}  
`;

export const showImage = css`
  left: 0;
  opacity: 1;
`;

export const showImageRight = css`
  right: 0;
  opacity: 1;
`;

export const productInfo = css`
  position: absolute;
  text-align: left;
  font-size: 16px;
  max-width: 550px;
  z-index: 2;

  ${mediaQuery(`
    margin: 0 auto;
  `)}  

  p {
    margin-bottom: 16px;

    ${mediaQuery(`
      font-size: 14px;
    `)}  
  }
`;

export const productInfo1 = css`
  left: 741px;

  ${mediaQuery(`
    position: initial;  
  `)}  
`;

export const productInfo2 = css`
  right: 677px;
  text-align: right;

  ${mediaQuery(`
    position: initial;  
    text-align: left;
  `)}
`;

export const productInfo3 = css`
  left: 602px;

  ${mediaQuery(`
    position: initial;  
  `)}  
`;

export const productInfo4 = css`
  right: 882px;
  text-align: right;

  ${mediaQuery(`
    position: initial;
    text-align: left;
  `)}
`;

export const productInfo5 = css`
  left: 606px;

  ${mediaQuery(`
    position: initial;
  `)}    
`;

const productOverlay = css`
  position: absolute;
  right: -1000px;
  font-size: 180px;
  text-align: left;
  line-height: 1;
  opacity: 0;
  z-index: 1;
  transition: all .8s cubic-bezier(0.71, 0.03, 0.15, 0.95);

  ${mediaQuery(`
    display: none;
  `)}
`;

export const productOverlayText1 = css`
  ${productOverlay}
  top: 240px;
`;

export const productOverlayText2 = css`
  ${productOverlay}
  top: 104px;
  width: 600px;
`;

export const productOverlayText3 = css`
  ${productOverlay}
  top: 270px;
`;

export const move = css`
  right: -250px;
  opacity: .1;
`;