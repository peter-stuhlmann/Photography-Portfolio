import React, { Fragment, useEffect, useState } from 'react';

import prices from '../../data/prices';

import { meta } from '../../helpers/meta';
import { Heading } from '../styled-components/Heading';
import PriceCategories from '../PriceCategories';
import PricesIntro from '../PricesIntro';
import PriceContent from '../PriceContent';
import { ShareButtons } from '../Sharing';

export default function Prices() {
  const [priceCategoryIndex, setPriceCategoryIndex] = useState(0);

  document.title = prices.meta.title;
  meta('name', 'description', prices.meta.description);

  useEffect(() => {
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
  }, []);

  return (
    <Fragment>
      <Heading h1 title={prices.heading} />
      <PricesIntro prices={prices} />
      <PriceCategories
        prices={prices}
        priceCategoryIndex={priceCategoryIndex}
        setPriceCategoryIndex={setPriceCategoryIndex}
      />
      <PriceContent prices={prices.content[priceCategoryIndex]} />
      <ShareButtons />
    </Fragment>
  );
}
