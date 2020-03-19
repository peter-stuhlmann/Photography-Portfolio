import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import LegalNotice from './pages/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Prices from './pages/Prices';
import Sitemap from './pages/Sitemap';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Portraits from './pages/Portraits';
import Nudes from './pages/Nudes';
import Landscapes from './pages/Landscapes';
import PhotoAPI from './pages/PhotoAPI';
import GeneralTerms from './pages/GeneralTerms';
import Vouchers from './pages/Vouchers';
import Calendar from './pages/Calendar';
import { ga } from '../helpers/analytics';

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={ga(Portraits)} />
      <Route exact path="/portraits" render={() => <Redirect to="/" />} />
      <Route exact path="/akt" component={ga(Nudes)} />
      <Route exact path="/landschaftsfotografie" component={ga(Landscapes)} />
      <Route exact path="/blog" component={ga(Blog)} />
      <Route exact path="/blog/:slug" component={ga(BlogPost)} />
      <Route exact path="/kontakt" component={ga(Contact)} />
      <Route exact path="/preise" component={ga(Prices)} />
      <Route exact path="/ueber-mich" component={ga(About)} />
      <Route exact path="/sitemap" component={ga(Sitemap)} />
      <Route exact path="/api" component={ga(PhotoAPI)} />
      <Route exact path="/gutscheine" component={ga(Vouchers)} />
      <Route exact path="/kalender" component={ga(Calendar)} />
      <Route exact path="/agb" component={ga(GeneralTerms)} />
      <Route exact path="/impressum" component={ga(LegalNotice)} />
      <Route
        exact
        path="/datenschutzerklaerung"
        component={ga(PrivacyPolicy)}
      />
      <Route component={ga(NotFound)} />
    </Switch>
  );
}
