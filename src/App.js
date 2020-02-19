import React, { Fragment, useState, useCallback } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
import Prices from './components/Prices';
import Footer from './components/Footer';
import Sitemap from './components/Sitemap';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Portraits from './components/Portraits';
import Nudes from './components/Nudes';
import Landscapes from './components/Landscapes';
import PhotoAPI from './components/PhotoAPI';
import GeneralTerms from './components/GeneralTerms';

export default function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Wrapper>
          <Switch>
            <Route exact path="/" component={Portraits} />
            <Route exact path="/akt" component={Nudes} />
            <Route exact path="/landschaftsfotografie" component={Landscapes} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog/:slug" component={BlogPost} />
            <Route exact path="/kontakt" component={Contact} />
            <Route exact path="/preise" component={Prices} />
            <Route exact path="/ueber-mich" component={About} />
            <Route exact path="/sitemap" component={Sitemap} />
            <Route exact path="/api" component={PhotoAPI} />
            <Route exact path="/agb" component={GeneralTerms} />
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
        <SubFooter />
      </BrowserRouter>
    </ContextProvider>
  );
}
