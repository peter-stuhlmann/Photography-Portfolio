import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Gallery from 'react-photo-gallery';
import ContextProvider from './Context';
import { GlobalStyles } from './components/styled-components/GlobalStyles';
import { Wrapper } from './components/styled-components/Wrapper';
import About from './components/About';
import SubFooter from './components/SubFooter';
import Header from './components/Header';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import LegalNotice from './components/LegalNotice';
import PrivacyPolicy from './components/PrivacyPolicy';
import { landscapes, nudes, portraits } from './data/Photos';
import Prices from './components/Prices';

export default function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Wrapper>
          <Switch>
            <Route
              exact
              path="/"
              render={() =>
                portraits ? (
                  <Gallery photos={portraits} />
                ) : (
                  'Bilder werden geladen ...'
                )
              }
            />
            <Route
              exact
              path="/akt"
              render={() =>
                nudes ? <Gallery photos={nudes} /> : 'Bilder werden geladen ...'
              }
            />
            <Route
              exact
              path="/landschaftsfotografie"
              render={() =>
                landscapes ? (
                  <Gallery photos={landscapes} />
                ) : (
                  'Bilder werden geladen ...'
                )
              }
            />
            <Route exact path="/kontakt" component={Contact} />
            <Route exact path="/preise" component={Prices} />
            <Route exact path="/ueber-mich" component={About} />
            <Route exact path="/impressum" component={LegalNotice} />
            <Route
              exact
              path="/datenschutzerklaerung"
              component={PrivacyPolicy}
            />
            <Route component={NotFound} />
          </Switch>
        </Wrapper>
        <SubFooter />
      </BrowserRouter>
    </ContextProvider>
  );
}
