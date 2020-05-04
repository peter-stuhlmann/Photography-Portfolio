import React, { Fragment, useContext } from 'react';

import { Context } from '../../Context';
import { meta } from '../../helpers/meta';
import { Heading } from '../styled-components/Heading';

export default function LegalNotice() {
  const { text } = useContext(Context);

  document.title = text.legalNotice.meta.title;
  meta('name', 'description', text.legalNotice.meta.description);

  return (
    <Fragment>
      <Heading h1 title={text.legalNotice.heading} />
      <Heading h2 title={text.legalNotice.tmg.heading} />
      <p
        dangerouslySetInnerHTML={{
          __html: text.legalNotice.tmg.text,
        }}
      />
      <Heading h2 title={text.legalNotice.disclaimerContent.heading} />
      <p>{text.legalNotice.disclaimerContent.text}</p>
      <Heading h2 title={text.legalNotice.disclaimerLinks.heading} />
      <p>{text.legalNotice.disclaimerLinks.text}</p>
      <Heading h2 title={text.legalNotice.copyright.heading} />
      <p>{text.legalNotice.copyright.text}</p>
      <p>{text.legalNotice.source}</p>
    </Fragment>
  );
}
