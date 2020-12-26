import React, { Fragment } from 'react';

import { meta } from '../../helpers/meta';
import { Heading } from '../styled-components/Heading';
import privacyPolicy from '../../data/privacyPolicy.js';

export default function PrivacyPolicy() {
  document.title = privacyPolicy.meta.title;
  meta('name', 'description', privacyPolicy.meta.description);

  return (
    <Fragment>
      <Heading h1 title={privacyPolicy.heading} />
    </Fragment>
  );
}
