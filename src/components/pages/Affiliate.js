import React, { Fragment } from 'react';
import { meta } from '../../helpers/meta';
import affiliate from '../../data/affiliate';

export default function Affiliate() {
  document.title = affiliate.meta.title;
  meta('name', 'description', affiliate.meta.description);

  return (
    <Fragment>
      <h1>{affiliate.heading}</h1>

      {affiliate.text.map(paragraph => (
        <Fragment key={paragraph}>{paragraph}</Fragment>
      ))}
    </Fragment>
  );
}
