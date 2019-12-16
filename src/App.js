import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import { GlobalStyles } from './components/styled-components/GlobalStyles';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Footer />
    </BrowserRouter>
  );
}
