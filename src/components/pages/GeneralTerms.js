import React, { Fragment, useContext } from 'react';
import { Context } from '../../Context';

export default function GeneralTerms() {
  const { legal } = useContext(Context);

  return (
    <Fragment>
      <h1>{legal.legalTerms.heading}</h1>

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
