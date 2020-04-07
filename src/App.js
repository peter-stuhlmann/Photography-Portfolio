import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Context } from './Context';
import { GlobalStyles } from './components/styled-components/GlobalStyles';
import { Wrapper } from './components/styled-components/Wrapper';
import SubFooter from './components/SubFooter';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from 'styled-components';
import CookieConsentBanner from './components/CookieConsentBanner';
import Router from './components/Router';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const { themeMode } = useContext(Context);

  return (
    <ThemeProvider theme={{ mode: themeMode }}>
      <BrowserRouter>
        <ScrollToTop />
        <GlobalStyles />
        <CookieConsentBanner />
        <Header />
        <Wrapper>
          <Router />
        </Wrapper>
        <Footer />
        <SubFooter />
      </BrowserRouter>
    </ThemeProvider>
  );
}
