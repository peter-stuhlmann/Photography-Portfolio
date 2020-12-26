import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './components/styled-components/GlobalStyles';
import { Wrapper } from './components/styled-components/Wrapper';
import SubFooter from './components/SubFooter';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from 'styled-components';
import CookieConsentBanner from './components/CookieConsentBanner';
import Router from './components/Router';
import ScrollToTop from './components/ScrollToTop';
import { useLocalStorage } from './helpers/useLocalStorage';

export default function App() {
  const [themeMode, setThemeMode] = useLocalStorage('Theme', 'light');

  const [tracking, setTracking] = useLocalStorage('Tracking', false);

  const toggleTracking = () => {
    setTracking(!tracking);
  };
  const optInTracking = () => {
    setTracking(true);
  };
  const optOutTracking = () => {
    setTracking(false);
  };

  const toggleTheming = () => {
    themeMode === 'light' ? setThemeMode('dark') : setThemeMode('light');
  };

  return (
    <ThemeProvider theme={{ mode: themeMode }}>
      <BrowserRouter>
        <ScrollToTop />
        <GlobalStyles />
        <CookieConsentBanner
          tracking={tracking}
          toggleTracking={toggleTracking}
          optInTracking={optInTracking}
          optOutTracking={optOutTracking}
        />
        <Header
          toggleTracking={toggleTracking}
          tracking={tracking}
          toggleTheming={toggleTheming}
          themeMode={themeMode}
        />
        <Wrapper>
          <Router />
        </Wrapper>
        <Footer
          toggleTheming={toggleTheming}
          themeMode={themeMode}
          setThemeMode={setThemeMode}
          tracking={tracking}
          setTracking={setTracking}
        />
        <SubFooter />
      </BrowserRouter>
    </ThemeProvider>
  );
}
