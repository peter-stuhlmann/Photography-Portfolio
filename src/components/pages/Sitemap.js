import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../../Context';
import { UL } from '../styled-components/List';
import { meta } from '../../helpers/meta';
import { Heading } from '../styled-components/Heading';

export default function Sitemap() {
  const { text } = useContext(Context);

  document.title = text.sitemap.meta.title;
  meta('name', 'description', text.sitemap.meta.description);

  return (
    <Fragment>
      <Heading h1 title={text.sitemap.heading} />
      <UL>
        {text.sitemap.links.map(links => (
          <li key={links.href}>
            <Link to={links.href}>{links.linkText}</Link>
          </li>
        ))}
      </UL>
    </Fragment>
  );
}
