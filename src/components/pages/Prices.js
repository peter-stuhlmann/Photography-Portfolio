import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../../Context';
import { meta } from '../../helpers/meta';
import { TwoColumns } from '../styled-components/Columns';
import { Heading } from '../styled-components/Heading';
import PriceCategories from '../PriceCategories';
import PricesIntro from '../PricesIntro';
import PriceList from '../PriceList';

export default function Prices() {
  const { text, priceCategoryIndex, setPriceCategoryIndex } = useContext(
    Context
  );

  document.title = text.prices.meta.title;
  meta('name', 'description', text.prices.meta.description);

  const section = text.prices.content[priceCategoryIndex];

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

      <Heading h2 title={section.heading} />
      <TwoColumns
        columnLeft={section.columns ? section.columns.left : '0 0 100%'}
        columnRight={section.columns ? section.columns.right : '0 0 100%'}
      >
        <div className="column-left">
          {section.text.map(paragraph =>
            paragraph.link ? (
              <p key={paragraph.paragraph}>
                <span
                  dangerouslySetInnerHTML={{
                    __html: paragraph.paragraph,
                  }}
                />
                <Link
                  to={paragraph.link.href}
                  className="internal-inline-link"
                  title={paragraph.link.title}
                >
                  {paragraph.link.linkText}
                </Link>
                .
              </p>
            ) : (
              <p
                key={paragraph.paragraph}
                dangerouslySetInnerHTML={{
                  __html: paragraph.paragraph,
                }}
              />
            )
          )}
        </div>
        <div className="column-right">
          <PriceList />
        </div>
      </TwoColumns>
    </Fragment>
  );
}
