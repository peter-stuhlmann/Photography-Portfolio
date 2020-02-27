import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import LegalNotice from './LegalNotice';
import PrivacyPolicy from './PrivacyPolicy';
import Prices from './Prices';
import Sitemap from './Sitemap';
import Blog from './Blog';
import BlogPost from './BlogPost';
import Portraits from './Portraits';
import Nudes from './Nudes';
import Landscapes from './Landscapes';
import PhotoAPI from './PhotoAPI';
import GeneralTerms from './GeneralTerms';
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
