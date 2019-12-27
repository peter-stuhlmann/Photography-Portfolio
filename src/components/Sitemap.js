import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';
import { UL } from './styled-components/List';

export default function Sitemap() {
  const { text } = useContext(Context);

  return (
    <Fragment>
      <h1>{text.sitemap.heading}</h1>
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
