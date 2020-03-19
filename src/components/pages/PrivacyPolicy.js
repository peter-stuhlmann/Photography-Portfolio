import React, { Fragment, useContext } from 'react';
import { Context } from '../../Context';

export default function PrivacyPolicy() {
  const { text } = useContext(Context);

  return (
    <Fragment>
      <h1>Datenschutzerklärung</h1>
    </Fragment>
  );
}
