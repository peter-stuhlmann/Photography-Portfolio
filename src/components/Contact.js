import React, { Fragment, useContext } from 'react';
import { Context } from '../Context';

export default function Contact() {
  const { text } = useContext(Context);

  return (
    <Fragment>
      <h1>{text.contact.heading}</h1>
    </Fragment>
  );
}
