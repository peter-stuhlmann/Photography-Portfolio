import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ga } from '../helpers/analytics';

const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
const LegalNotice = lazy(() => import('./pages/LegalNotice'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Prices = lazy(() => import('./pages/Prices'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Portraits = lazy(() => import('./pages/Portraits'));
const PhotoAPI = lazy(() => import('./pages/PhotoAPI'));
const GeneralTerms = lazy(() => import('./pages/GeneralTerms'));
const Vouchers = lazy(() => import('./pages/Vouchers'));
const Calendar = lazy(() => import('./pages/Calendar'));
const Documents = lazy(() => import('./pages/Documents'));

export default function Router() {
  return (
    <Suspense fallback={<div>Inhalt wird geladen...</div>}>
      <Switch>
        <Route exact path="/" component={ga(Portraits)} />
        <Route exact path="/portraits" render={() => <Redirect to="/" />} />
        <Route exact path="/akt" component={ga(Portraits)} />
        <Route exact path="/landschaftsfotografie" component={ga(Portraits)} />
        <Route exact path="/blog" component={ga(Blog)} />
        <Route exact path="/blog/:slug" component={ga(BlogPost)} />
        <Route exact path="/kontakt" component={ga(Contact)} />
        <Route exact path="/preise" component={ga(Prices)} />
        <Route exact path="/dokumente" component={ga(Documents)} />
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
    </Suspense>
  );
}
