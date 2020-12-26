import React, { Fragment } from 'react';

import { UL } from '../styled-components/List';
import { meta } from '../../helpers/meta';
import { Heading } from '../styled-components/Heading';
import contact from '../../data/contact';

export default function Contact() {
  document.title = contact.meta.title;
  meta('name', 'description', contact.meta.description);

  return (
    <Fragment>
      <Heading h1 title={contact.heading} />

      <UL listStyleType="none" paddingX="0">
        {contact.data.map(data => (
          <li key={data}>{data}</li>
        ))}
      </UL>
      <p style={{ marginTop: '50px' }}>{contact.text[0]}</p>
      <p>{contact.text[1]}</p>
      <UL>
        {contact.list.map(list => (
          <li key={list}>{list}</li>
        ))}
      </UL>
      <p>{contact.text[2]}</p>
    </Fragment>
  );
}
