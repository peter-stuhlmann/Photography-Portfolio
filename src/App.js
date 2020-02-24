import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ContextProvider, { Context } from './Context';
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
import { ga } from './helpers/analytics';

export default function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Wrapper>
          <Switch>
            <Route exact path="/" component={ga(Portraits)} />
            <Route exact path="/portraits" render={() => <Redirect to="/" />} />
            <Route exact path="/akt" component={ga(Nudes)} />
            <Route
              exact
              path="/landschaftsfotografie"
              component={ga(Landscapes)}
            />
            <Route exact path="/blog" component={ga(Blog)} />
            <Route exact path="/blog/:slug" component={ga(BlogPost)} />
            <Route exact path="/kontakt" component={ga(Contact)} />
            <Route exact path="/preise" component={ga(Prices)} />
            <Route exact path="/ueber-mich" component={ga(About)} />
            <Route exact path="/sitemap" component={ga(Sitemap)} />
            <Route exact path="/api" component={ga(PhotoAPI)} />
            <Route exact path="/agb" component={ga(GeneralTerms)} />
            <Route exact path="/impressum" component={ga(LegalNotice)} />
            <Route
              exact
              path="/datenschutzerklaerung"
              component={ga(PrivacyPolicy)}
            />
            <Route component={ga(NotFound)} />
          </Switch>
        </Wrapper>
        <Footer />
        <SubFooter />
      </BrowserRouter>
    </ContextProvider>
  );
}
