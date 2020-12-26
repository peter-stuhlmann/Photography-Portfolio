import React, { Fragment, useEffect, useState, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

import { debounce } from '../../helpers/debounce';
import { meta } from '../../helpers/meta';

import loading from '../../data/loading';

import portraitsPage from '../../data/portraits';
import landscapesPage from '../../data/landscapes';
import nudesPage from '../../data/nudes';
import { portraits, landscapes, nudes } from '../../data/Photos';

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

  const [images, setImages] = useState(photos.slice(0, 6));
  const [amount, setAmount] = useState(6);
  const [loadedAll, setLoadedAll] = useState(false);

  const [ref, inView] = useInView();

  const loadMorePhotos = debounce(() => {
    if (amount > photos.length) {
      setLoadedAll(true);
    }
    setImages(images.concat(photos.slice(images.length, images.length + 6)));
    setAmount(amount + 6);
  }, 200);

  useEffect(() => {
    if (inView === true) {
      loadMorePhotos();
    }
  });

  return (
    <Fragment>
      <Gallery photos={images} onClick={openLightbox} />
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
      {!loadedAll && <div ref={ref}>{loading.images}</div>}
    </Fragment>
  );
}
