import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { GlobalStyles } from './components/styled-components/GlobalStyles';
import { landscapes, nudes, portraits } from './data/Photos';
import Gallery from 'react-photo-gallery';
import { Wrapper } from './components/styled-components/Wrapper';
import NotFound from './components/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Wrapper>
        <Switch>
          <Route exact path="/" render={() => <Gallery photos={portraits} />} />
          <Route exact path="/akt" render={() => <Gallery photos={nudes} />} />
          <Route
            exact
            path="/landschaftsfotografie"
            render={() => <Gallery photos={landscapes} />}
          />
          <Route component={NotFound} />
        </Switch>
      </Wrapper>
      <Footer />
    </BrowserRouter>
  );
}
