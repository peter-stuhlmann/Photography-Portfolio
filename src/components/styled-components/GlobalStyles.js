import { createGlobalStyle } from 'styled-components';
import RalewayRegular from '../../assets/fonts/raleway/Raleway-Regular.ttf';
import { textColor, backgroundColor } from './Themes';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Raleway';
    src: url(${RalewayRegular});
    font-display: block;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${backgroundColor};
    color: ${textColor};
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
    transition: 0.3s;
    overflow-y: scroll;

    .external-inline-link,
    .internal-inline-link {
      color: ${textColor};
      transition: 0.2s;

      &:hover {
        opacity: 0.5;
      }
    }

    // portfolio galleries
    .react-photo-gallery--gallery img {
      filter: grayscale(100%);
      transition: 0.5s;
      background-color: #969696;    

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
