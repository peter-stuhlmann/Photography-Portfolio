import React, {
  Fragment,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { useInView } from 'react-intersection-observer';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

import { Context } from '../../Context';
import { debounce } from '../../helpers/debounce';
import { text } from '../../data/Text';
import { meta } from '../../helpers/meta';

export default function PortfolioGallery() {
  const { portraits, landscapes, nudes } = useContext(Context);

  const route = window.location.pathname;
  let photos;

  switch (route) {
    case '/':
      photos = portraits;
      document.title = text.portraits.meta.title;
      meta('name', 'description', text.portraits.meta.description);
      break;
    case '/landschaftsfotografie':
      photos = landscapes;
      document.title = text.landscapes.meta.title;
      meta('name', 'description', text.landscapes.meta.description);
      break;
    case '/akt':
      photos = nudes;
      document.title = text.nudes.meta.title;
      meta('name', 'description', text.nudes.meta.description);
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
      {!loadedAll && <div ref={ref}>{text.gallery.loading}</div>}
    </Fragment>
  );
}
