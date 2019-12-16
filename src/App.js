import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { GlobalStyles } from './components/styled-components/GlobalStyles';
import Portraits from './components/Portraits';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Portraits />
      <Footer />
    </BrowserRouter>
  );
}
