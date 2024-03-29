import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import sitemap from '../../data/sitemap';
import { UL } from '../styled-components/List';
import { meta } from '../../helpers/meta';
import { Heading } from '../styled-components/Heading';

export default function Sitemap() {
  document.title = sitemap.meta.title;
  meta('name', 'description', sitemap.meta.description);

  return (
    <Fragment>
      <Heading h1 title={sitemap.heading} />
      <UL>
        {sitemap.links.map(links => (
          <li key={links.href}>
            <Link to={links.href}>{links.linkText}</Link>
          </li>
        ))}
      </UL>
    </Fragment>
  );
}
