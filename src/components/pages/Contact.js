import React, { Fragment, useContext } from 'react';

import { Context } from '../../Context';
import { UL } from '../styled-components/List';
import { meta } from '../../helpers/meta';

export default function Contact() {
  const { text } = useContext(Context);

  document.title = text.contact.meta.title;
  meta('name', 'description', text.contact.meta.description);

  return (
    <Fragment>
      <h1>{text.contact.heading}</h1>
      <UL listStyleType="none" paddingX="0">
        {text.contact.data.map(data => (
          <li key={data}>{data}</li>
        ))}
      </UL>
      <p style={{ marginTop: '50px' }}>{text.contact.text[0]}</p>
      <p>{text.contact.text[1]}</p>
      <UL>
        {text.contact.list.map(list => (
          <li key={list}>{list}</li>
        ))}
      </UL>
      <p>{text.contact.text[2]}</p>
    </Fragment>
  );
}
