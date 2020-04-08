import React, { Fragment, useContext } from 'react';

import { Context } from '../../Context';
import { meta } from '../../helpers/meta';

export default function PrivacyPolicy() {
  const { legal } = useContext(Context);

  document.title = legal.privacyPolicy.meta.title;
  meta('name', 'description', legal.privacyPolicy.meta.description);

  return (
    <Fragment>
      <h1>{legal.privacyPolicy.heading}</h1>
    </Fragment>
  );
}
