import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../../Context';
import { UL } from '../styled-components/List';
import { meta } from '../../helpers/meta';
import { Heading } from '../styled-components/Heading';

export default function NotFound() {
  const { text } = useContext(Context);

  document.title = text.notFound.meta.title;
  meta('name', 'description', text.notFound.meta.description);

  return (
    <Fragment>
      <Heading h1 title={text.notFound.heading} />

      <div>
        <Heading h2 title={text.notFound.list.heading} />
        <UL>
          {text.notFound.list.links.map(link => (
            <li key={link.path}>
              <Link title={link.linkText} to={link.path}>
                {link.linkText}
              </Link>
            </li>
          ))}
        </UL>
      </div>
    </Fragment>
  );
}
