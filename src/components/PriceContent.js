import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Context } from '../Context';
import { TwoColumns } from './styled-components/Columns';
import { Heading } from './styled-components/Heading';
import PriceList from './PriceList';

export default function PriceContent() {
  const { text, priceCategoryIndex } = useContext(Context);

  const section = text.prices.content[priceCategoryIndex];

  return (
    <StyledPriceContent>
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
    </StyledPriceContent>
  );
}

const StyledPriceContent = styled.article`
  animation: fade-in 0.5s;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
