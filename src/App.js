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

  const optInCookie = () => {
    setTracking(true);
  };
  const optOutCookie = () => {
    setTracking(false);
  };

  return (
    <ThemeProvider theme={{ mode: themeMode }}>
      <BrowserRouter>
        <ScrollToTop />
        <GlobalStyles />
        <CookieConsentBanner
          tracking={tracking}
          optInCookie={optInCookie}
          optOutCookie={optOutCookie}
        />
        <Header
          tracking={tracking}
          setTracking={setTracking}
          themeMode={themeMode}
          setThemeMode={setThemeMode}
        />
        <Wrapper>
          <Router />
        </Wrapper>
        <section>
          <Footer
            themeMode={themeMode}
            setThemeMode={setThemeMode}
            tracking={tracking}
            setTracking={setTracking}
          />
          <SubFooter />
        </section>
      </BrowserRouter>
    </ThemeProvider>
  );
}
