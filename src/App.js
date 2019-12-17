import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Gallery from 'react-photo-gallery';
import ContextProvider from './Context';
import { GlobalStyles } from './components/styled-components/GlobalStyles';
import { Wrapper } from './components/styled-components/Wrapper';
import { landscapes, nudes, portraits } from './data/Photos';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import NotFound from './components/NotFound';
import LegalNotice from './components/LegalNotice';
import PrivacyPolicy from './components/PrivacyPolicy';

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
              render={() => <Gallery photos={portraits} />}
            />
            <Route
              exact
              path="/akt"
              render={() => <Gallery photos={nudes} />}
            />
            <Route
              exact
              path="/landschaftsfotografie"
              render={() => <Gallery photos={landscapes} />}
            />
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
        <Footer />
      </BrowserRouter>
    </ContextProvider>
  );
}
