import React, { Fragment, useContext } from 'react';
import { Context } from '../../Context';
import { meta } from '../../helpers/meta';

export default function Affiliate() {
  const { text } = useContext(Context);

  document.title = text.affiliate.meta.title;
  meta('name', 'description', text.affiliate.meta.description);

  return (
    <Fragment>
      <h1>{text.affiliate.heading}</h1>

      {text.affiliate.text.map(paragraph => (
        <Fragment key={paragraph}>{paragraph}</Fragment>
      ))}
    </Fragment>
  );
}
