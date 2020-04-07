import { createGlobalStyle } from 'styled-components';
import RalewayRegular from '../../assets/fonts/raleway/Raleway-Regular.ttf';
import Spinner from '../../assets/img/spinner.svg';
import { textColor, backgroundColor } from './Themes';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Raleway';
    src: url(${RalewayRegular});
    font-display: block;
  }

  body {
    background-color: ${backgroundColor};
    color: ${textColor};
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    margin: 0;

    // portfolio galleries
    .react-photo-gallery--gallery img {
      filter: grayscale(100%);
      transition: 0.5s;
      background-color: #969696;
      background-image: url(${Spinner});
      background-size: 100px 100px;
      background-repeat: no-repeat;
      background-position: center;

      &::after {
        content: "";
        background: ${backgroundColor};
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1
      }
      

      &:hover {
        filter: grayscale(0%);
      }
    }

    blockquote {
      margin: 0 auto;
      padding: 0 15px;
      border-left: 2px solid ${textColor};
    }
  }
`;
