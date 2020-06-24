import React, { Fragment, useContext } from 'react';
import { Context } from '../../Context';
import { meta } from '../../helpers/meta';

export default function Prints() {
  const { text } = useContext(Context);

  document.title = text.prints.meta.title;
  meta('name', 'description', text.prints.meta.description);

  return (
    <Fragment>
      <h1>{text.prints.heading}</h1>

      {text.prints.text.map(paragraph => (
        <Fragment key={paragraph}>{paragraph}</Fragment>
      ))}
    </Fragment>
  );
}
