import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { GlobalStyles } from './components/styled-components/GlobalStyles';
import { portraits } from './data/Photos';
import Gallery from 'react-photo-gallery';
import { Wrapper } from './components/styled-components/Wrapper';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Wrapper>
        <Gallery photos={portraits} />
      </Wrapper>
      <Footer />
    </BrowserRouter>
  );
}
