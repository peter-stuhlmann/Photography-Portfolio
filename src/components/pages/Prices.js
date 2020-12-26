import React, { Fragment, useContext } from 'react';

import { Context } from '../../Context';
import { meta } from '../../helpers/meta';
import { Heading } from '../styled-components/Heading';
import PriceCategories from '../PriceCategories';
import PricesIntro from '../PricesIntro';
import PriceContent from '../PriceContent';
import { ShareButtons } from '../Sharing';

export default function Prices() {
  const { text, setPriceCategoryIndex } = useContext(Context);

  document.title = text.prices.meta.title;
  meta('name', 'description', text.prices.meta.description);

  switch (window.location.hash) {
    case '#portraits':
      setPriceCategoryIndex(0);
      break;
    case '#akt':
      setPriceCategoryIndex(1);
      break;
    case '#paare':
      setPriceCategoryIndex(2);
      break;
    case '#landschaften':
      setPriceCategoryIndex(3);
      break;
    case '#sonstiges':
      setPriceCategoryIndex(4);
      break;
    case '#prints':
      setPriceCategoryIndex(5);
      break;
    default:
      setPriceCategoryIndex(0);
  }

  return (
    <Fragment>
      <Heading h1 title={text.prices.heading} />
      <PricesIntro />
      <PriceCategories />
      <PriceContent />
      <ShareButtons />
    </Fragment>
  );
}
