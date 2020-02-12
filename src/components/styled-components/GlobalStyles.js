import { createGlobalStyle } from 'styled-components';
import RalewayRegular from '../../assets/fonts/raleway/Raleway-Regular.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Raleway';
    src: url(${RalewayRegular});
  }

  body {
    background-color: #fff;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    margin: 0;

    .react-photo-gallery--gallery img {
      filter: grayscale(100%);
      transition: 0.5s;

      &:hover {
        filter: grayscale(0%);
      }
    }
  }
`;
