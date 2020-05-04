import React, { Fragment, useContext } from 'react';

import { Context } from '../../Context';
import { meta } from '../../helpers/meta';
import { Heading } from '../styled-components/Heading';

export default function PrivacyPolicy() {
  const { legal } = useContext(Context);

  document.title = legal.privacyPolicy.meta.title;
  meta('name', 'description', legal.privacyPolicy.meta.description);

  return (
    <Fragment>
      <Heading h1 title={legal.privacyPolicy.heading} />
    </Fragment>
  );
}
