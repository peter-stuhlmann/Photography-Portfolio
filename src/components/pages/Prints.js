import React, { Fragment } from 'react';

import { meta } from '../../helpers/meta';
import prints from '../../data/prints';

export default function Prints() {
  document.title = prints.meta.title;
  meta('name', 'description', prints.meta.description);

  return (
    <Fragment>
      <h1>{prints.heading}</h1>

      {prints.text.map(paragraph => (
        <Fragment key={paragraph}>{paragraph}</Fragment>
      ))}
    </Fragment>
  );
}
