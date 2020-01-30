import React, { Fragment, useState, useCallback } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
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
import Footer from './components/Footer';
import Sitemap from './components/Sitemap';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';

export default function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

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
                  <Fragment>
                    <Gallery photos={portraits} onClick={openLightbox} />
                    <ModalGateway>
                      {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                          <Carousel
                            currentIndex={currentImage}
                            views={portraits.map(x => ({
                              ...x,
                              srcset: x.srcSet,
                              caption: x.title,
                            }))}
                          />
                        </Modal>
                      ) : null}
                    </ModalGateway>
                  </Fragment>
                ) : (
                  'Bilder werden geladen ...'
                )
              }
            />
            <Route
              exact
              path="/akt"
              render={() =>
                nudes ? (
                  <Fragment>
                    <Gallery photos={nudes} onClick={openLightbox} />
                    <ModalGateway>
                      {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                          <Carousel
                            currentIndex={currentImage}
                            views={nudes.map(x => ({
                              ...x,
                              srcset: x.srcSet,
                              caption: x.title,
                            }))}
                          />
                        </Modal>
                      ) : null}
                    </ModalGateway>
                  </Fragment>
                ) : (
                  'Bilder werden geladen ...'
                )
              }
            />
            <Route
              exact
              path="/landschaftsfotografie"
              render={() =>
                landscapes ? (
                  <Fragment>
                    <Gallery photos={landscapes} onClick={openLightbox} />
                    <ModalGateway>
                      {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                          <Carousel
                            currentIndex={currentImage}
                            views={landscapes.map(x => ({
                              ...x,
                              srcset: x.srcSet,
                              caption: x.title,
                            }))}
                          />
                        </Modal>
                      ) : null}
                    </ModalGateway>
                  </Fragment>
                ) : (
                  'Bilder werden geladen ...'
                )
              }
            />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog/:slug" component={BlogPost} />
            <Route exact path="/kontakt" component={Contact} />
            <Route exact path="/preise" component={Prices} />
            <Route exact path="/ueber-mich" component={About} />
            <Route exact path="/sitemap" component={Sitemap} />
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
