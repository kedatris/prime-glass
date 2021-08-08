import { css } from '@emotion/css';
import { white, darkGreen } from 'styles/colors';
import { mediaQuery } from 'styles/media';
import iconMenu from 'assets/icons/menu.svg';
import iconClose from 'assets/icons/close.svg';

export const navbar = css`
  position: absolute; 
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 64px;
  background-color: #ffffff;
  z-index: 2;

  ${mediaQuery(`
    padding: 16px;
  `)}
`;

export const navLeft = css`
  display: flex;
  align-items: center;
`;

export const navLogo = css`
  height: 54px;

  ${mediaQuery(`
    height: 50px;
  `)}
`;

export const navTagline = css`
  font-size: 16px;
  margin-left: 24px;
  color: ${darkGreen};
  font-weight: 600;
  max-width: 200px;
  line-height: 1.4;

  ${mediaQuery(`
    font-size: 12px;
    margin-left: 16px;
    width: 100px;  
  `)}
`;

export const navList = css`
  display: flex;
  align-items: center;

  ${mediaQuery(`
    display: none;
  `)}
`;

export const navListItem = css`
  margin-right: 32px;
  padding: 14px 0;

  a:hover {
    color: ${darkGreen};
  }
`;

export const sideMenu = css`
  position: absolute;
  right: 16px;
  top: 50%;
  height: 30px;
  width: 30px;
  background: url(${iconMenu}) no-repeat center;
  background-size: contain;
  transform: translateY(-50%);
`;

export const sideNav = css`
  position: fixed;
  top: 0;
  right: -210px;
  bottom: 0;
  width: 200px;
  padding: 32px 20px;
  background-color: ${white};
  box-shadow: 0 0 8px rgba(0, 0, 0, .32);
`;

export const sideNavShow = css`
  right: 0;
`;

export const sideNavItem = css`
  margin-bottom: 16px;

  button {
    margin-top: 32px;
  }
`;

export const sideNavClose = css`
  position: absolute;
  right: 16px;
  top: 28px;
  height: 20px;
  width: 20px;
  background: url(${iconClose}) no-repeat center;
  background-size: contain;
`;