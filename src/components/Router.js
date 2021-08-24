import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ga } from '../helpers/analytics';

const About = lazy(() => import('./pages/About'));
const Affiliate = lazy(() => import('./pages/Affiliate'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Calendar = lazy(() => import('./pages/Calendar'));
const Contact = lazy(() => import('./pages/Contact'));
const Procedure = lazy(() => import('./pages/Procedure'));
const Downloads = lazy(() => import('./pages/Downloads'));
const Faq = lazy(() => import('./pages/Faq'));
const GeneralTerms = lazy(() => import('./pages/GeneralTerms'));
const Home = lazy(() => import('./pages/Home'));
const LegalNotice = lazy(() => import('./pages/LegalNotice'));
const NotFound = lazy(() => import('./pages/NotFound'));
const PhotoAPI = lazy(() => import('./pages/PhotoAPI'));
const PortfolioGallery = lazy(() => import('./pages/PortfolioGallery'));
const Prices = lazy(() => import('./pages/Prices'));
const Prints = lazy(() => import('./pages/Prints'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const RightOfWithdrawal = lazy(() => import('./pages/RightOfWithdrawal'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const Vouchers = lazy(() => import('./pages/Vouchers'));

export default function Router() {
  return (
    <Suspense fallback={<div>Inhalt wird geladen...</div>}>
      <Switch>
        <Route exact path="/" component={ga(Home)} />
        <Route exact path="/portraits" component={ga(PortfolioGallery)} />
        {/* <Route exact path="/agb" component={ga(GeneralTerms)} /> */}
        {/* <Route exact path="/ablauf" component={ga(Procedure)} /> */}
        <Route exact path="/akt" component={ga(PortfolioGallery)} />
        <Route exact path="/api" component={ga(PhotoAPI)} />
        {/* <Route exact path="/blog" component={ga(Blog)} /> */}
        {/* <Route exact path="/blog/:slug" component={ga(BlogPost)} /> */}
        <Route
          exact
          path="/datenschutzerklaerung"
          component={ga(PrivacyPolicy)}
        />
        <Route exact path="/downloads" component={ga(Downloads)} />
        {/* <Route exact path="/faq" component={ga(Faq)} /> */}
        <Route exact path="/gutscheine" component={ga(Vouchers)} />
        <Route exact path="/impressum" component={ga(LegalNotice)} />
        <Route exact path="/kalender" component={ga(Calendar)} />
        <Route exact path="/kontakt" component={ga(Contact)} />
        <Route
          exact
          path="/landschaftsfotografie"
          component={ga(PortfolioGallery)}
        />
        {/* <Route exact path="/partnerprogramm" component={ga(Affiliate)} /> */}
        <Route exact path="/portraits" render={() => <Redirect to="/" />} />
        <Route exact path="/preise" component={ga(Prices)} />
        {/* <Route exact path="/prints" component={ga(Prints)} /> */}
        <Route exact path="/sitemap" component={ga(Sitemap)} />
        <Route exact path="/ueber-mich" component={ga(About)} />
        <Route
          exact
          path="/widerrufsbelehrung"
          component={ga(RightOfWithdrawal)}
        />
        <Route component={ga(NotFound)} />
      </Switch>
    </Suspense>
  );
}
