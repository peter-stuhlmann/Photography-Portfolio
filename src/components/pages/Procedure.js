import React, { Fragment, useContext } from 'react';
import { Context } from '../../Context';
import { meta } from '../../helpers/meta';

export default function Procedure() {
  const { text } = useContext(Context);

  document.title = text.procedure.meta.title;
  meta('name', 'description', text.procedure.meta.description);

  return (
    <Fragment>
      <h1>{text.procedure.heading}</h1>

      {text.procedure.text.map(paragraph => (
        <Fragment key={paragraph}>{paragraph}</Fragment>
      ))}
    </Fragment>
  );
}
