import React, { Fragment } from 'react';

import { meta } from '../../helpers/meta';
import { Heading } from '../styled-components/Heading';

import legalTerms from '../../data/legalTerms';

export default function GeneralTerms() {
  document.title = legalTerms.meta.title;
  meta('name', 'description', legalTerms.meta.description);

  return (
    <Fragment>
      <Heading h1 title={legalTerms.heading} />

      {legalTerms.content.map(terms => (
        <Fragment key={terms.heading}>
          <h2>{terms.heading}</h2>
          {terms.text.map(text => (
            <p key={text}>{text}</p>
          ))}
        </Fragment>
      ))}
    </Fragment>
  );
}
