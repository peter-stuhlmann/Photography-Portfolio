import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { UL } from '../styled-components/List';
import { meta } from '../../helpers/meta';
import { Heading } from '../styled-components/Heading';
import notFound from '../../data/notFound';

export default function NotFound() {
  document.title = notFound.meta.title;
  meta('name', 'description', notFound.meta.description);

  return (
    <Fragment>
      <Heading h1 title={notFound.heading} />

      <div>
        <Heading h2 title={notFound.list.heading} />
        <UL>
          {notFound.list.links.map(link => (
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
