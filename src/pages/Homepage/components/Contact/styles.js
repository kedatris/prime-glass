import { css } from '@emotion/css';
import { darkGreen, lightGreen } from 'styles/colors';
import { mediaQuery } from 'styles/media';
import { fs22 } from 'styles/font';

export const mb16 = css`
  margin-bottom: 16px;
`;

export const contentWrapper = css`
  padding: 100px 64px;
  margin-bottom: 90px;

  ${mediaQuery(`
    padding: 32px 16px;
  `)}
`;

export const contentContact = css`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  align-items: flex-start;

  ${mediaQuery(`
    flex-direction: column;
  `)}  
`;

export const contentLeft = css`
  width: 400px;
  margin-right: 120px;
  flex-shrink: 0;

  ${mediaQuery(`
    width: 100%;
    margin: 0 0 32px;  
  `)}
`;

export const contentRight = css`
  width: 100%;

  input, textarea {
    padding: 4px 12px;
  }

  ${mediaQuery(`
    .ant-space {
      flex-direction: column;
      width: 100%;
    }
  `)}
`;

export const contentTitle = css`
  font-size: 32px;
  color: ${darkGreen};

  ${mediaQuery(`
    font-size: ${fs22};
  `)}  
`;