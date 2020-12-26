import React, { Fragment } from 'react';

import { meta } from '../../helpers/meta';
import { Heading } from '../styled-components/Heading';
import legalNotice from '../../data/legalNotice';

export default function LegalNotice() {
  document.title = legalNotice.meta.title;
  meta('name', 'description', legalNotice.meta.description);

  return (
    <Fragment>
      <Heading h1 title={legalNotice.heading} />
      <Heading h2 title={legalNotice.tmg.heading} />
      <p
        dangerouslySetInnerHTML={{
          __html: legalNotice.tmg.text,
        }}
      />
      <Heading h2 title={legalNotice.disclaimerContent.heading} />
      <p>{legalNotice.disclaimerContent.text}</p>
      <Heading h2 title={legalNotice.disclaimerLinks.heading} />
      <p>{legalNotice.disclaimerLinks.text}</p>
      <Heading h2 title={legalNotice.copyright.heading} />
      <p>{legalNotice.copyright.text}</p>
      <p>{legalNotice.source}</p>
    </Fragment>
  );
}
