import React, { Fragment, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Context } from '../../Context';
import { meta } from '../../helpers/meta';
import { TwoColumns } from '../styled-components/Columns';
import { Image } from '../styled-components/Image';
import { UL } from '../styled-components/List';
import PriceCategories from '../PriceCategories';

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
      <h1>{text.prices.heading}</h1>

      <TwoColumns columnLeft="0 0 48%" columnRight="0 0 48%">
        <div className="column-left">
          <p>{text.prices.intro}</p>
        </div>
        <div className="column-right">
          <Image
            src={text.prices.img[0].src}
            alt={text.prices.img[0].alt}
            title={text.prices.img[0].title}
            style={{ marginTop: '1em', marginBottom: '45px' }}
          />
        </div>
      </TwoColumns>

      <PriceCategories />

      <h2 id={section.id}>{section.heading}</h2>
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
          <UL paddingX="0">
            {section.services?.map(service => (
              <PriceList key={service.heading}>
                <p className="service">
                  <strong>{service.heading}</strong> {service.description}
                </p>
                <p className="price">{service.price}</p>
              </PriceList>
            ))}
          </UL>
        </div>
      </TwoColumns>
    </Fragment>
  );
}

const PriceList = styled.li`
  animation: fade-in 1s;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .service {
    flex: 0 0 calc(100% - 80px);
    margin: 0 0 8px 0;
  }

  .price {
    flex: 0 0 80px;
    margin: 0 0 8px 0;
    font-weight: bold;
    text-align: right;
  }
`;
