import React, { Fragment, useEffect, useState, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

import { meta } from '../../helpers/meta';
import portraitsPage from '../../data/portraits';
import landscapesPage from '../../data/landscapes';
import nudesPage from '../../data/nudes';
import { portraits, landscapes, nudes } from '../../data/Photos';
import pixel from '../../assets/img/pixel.svg';
import loading from '../../data/loading';

export default function PortfolioGallery() {
  const route = window.location.pathname;
  let photos;

  switch (route) {
    case '/':
      photos = portraits;
      document.title = portraitsPage.meta.title;
      meta('name', 'description', portraitsPage.meta.description);
      break;
    case '/landschaftsfotografie':
      photos = landscapes;
      document.title = landscapesPage.meta.title;
      meta('name', 'description', landscapesPage.meta.description);
      break;
    case '/akt':
      photos = nudes;
      document.title = nudesPage.meta.title;
      meta('name', 'description', nudesPage.meta.description);
      break;
    default:
      photos = null;
  }

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

  const [amount, setAmount] = useState(1);

  const [ref, inView] = useInView();

  const loadMorePhotos = () => {
    setAmount(amount + 2);
  };

  useEffect(() => {
    if (inView === true && !(amount >= photos.length)) {
      loadMorePhotos();
    }
  });

  const [delayed, setDelayed] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDelayed(true);
    }, 1300);
  }, [delayed]);

  const images = photos.map((image, index) => {
    return {
      alt: image.alt,
      title: image.title,
      height: image.height,
      width: image.width,
      src: amount > index ? image.src : pixel,
      key: image.src,
      ref: index < amount ? ref : null,
    };
  });

  return (
    <Fragment>
      {delayed === false && <p>{loading.images}</p>}
      <div style={delayed ? { opacity: '1' } : { opacity: '0' }}>
        <Gallery photos={images} onClick={openLightbox} />
      </div>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={images.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Fragment>
  );
}
