import React, { Fragment, useContext } from 'react';

import { Context } from '../../Context';
import { meta } from '../../helpers/meta';

export default function LegalNotice() {
  const { text } = useContext(Context);

  document.title = text.legalNotice.meta.title;
  meta('name', 'description', text.legalNotice.meta.description);

  return (
    <Fragment>
      <h1>{text.legalNotice.heading}</h1>
      <h2>{text.legalNotice.tmg.heading}</h2>
      <p
        dangerouslySetInnerHTML={{
          __html: text.legalNotice.tmg.text,
        }}
      />
      <h2>{text.legalNotice.disclaimerContent.heading}</h2>
      <p>{text.legalNotice.disclaimerContent.text}</p>
      <h2>{text.legalNotice.disclaimerLinks.heading}</h2>
      <p>{text.legalNotice.disclaimerLinks.text}</p>
      <h2>{text.legalNotice.copyright.heading}</h2>
      <p>{text.legalNotice.copyright.text}</p>
      <p>{text.legalNotice.source}</p>
    </Fragment>
  );
}
