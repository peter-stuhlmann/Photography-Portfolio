import React, { Fragment, useContext } from 'react';

import { Context } from '../../Context';
import { meta } from '../../helpers/meta';
import { Heading } from '../styled-components/Heading';

export default function GeneralTerms() {
  const { legal } = useContext(Context);

  document.title = legal.legalTerms.meta.title;
  meta('name', 'description', legal.legalTerms.meta.description);

  return (
    <Fragment>
      <Heading h1 title={legal.legalTerms.heading} />

      {legal.legalTerms.content.map(terms => (
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
