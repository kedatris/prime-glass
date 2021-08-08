import { css } from '@emotion/css';
import { white, darkGreen, lightGreen } from 'styles/colors';

export const wrapper = css`
  overflow: hidden;
  font-family: 'Lato', sans-serif;
  font-size: 16px;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    color: ${darkGreen};
  }

  h1, h2, h3 {
    font-family: 'Nunito Sans', sans-serif;
  }

  Button {
    color: ${white};
    height: 40px;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    padding: 0 32px;
    background-color: ${lightGreen};
    transition: .2s all ease-in-out;

    :hover, :active, :focus {
      color: ${white};
      background-color: ${darkGreen};
    }
  }

  ul {
    list-style-type: none;
  }

  input {
    border-radius: 8px;
    height: 40px;
  }

  textarea {
    border-radius: 8px;
  }
`;