import React, { Fragment } from 'react';

import { meta } from '../../helpers/meta';
import procedure from '../../data/procedure';

export default function Procedure() {
  document.title = procedure.meta.title;
  meta('name', 'description', procedure.meta.description);

  return (
    <Fragment>
      <h1>{procedure.heading}</h1>

      {procedure.text.map(paragraph => (
        <Fragment key={paragraph}>{paragraph}</Fragment>
      ))}
    </Fragment>
  );
}
