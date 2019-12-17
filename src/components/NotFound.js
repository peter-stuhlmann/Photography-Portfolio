import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';
import { UL } from './styled-components/List';

export default function NotFound() {
  const { text } = useContext(Context);

  return (
    <Fragment>
      <h1>{text.notFound.heading}</h1>
      <p>
        {text.notFound.list.heading}
        <UL>
          <li>
            <Link to={text.notFound.list.links[0].href}>
              {text.notFound.list.links[0].linkText}
            </Link>
          </li>
          <li>
            <Link to={text.notFound.list.links[1].href}>
              {text.notFound.list.links[1].linkText}
            </Link>
          </li>
          <li>
            <Link to={text.notFound.list.links[2].href}>
              {text.notFound.list.links[2].linkText}
            </Link>
          </li>
          <li>
            <Link to={text.notFound.list.links[3].href}>
              {text.notFound.list.links[3].linkText}
            </Link>
          </li>
          <li>
            <Link to={text.notFound.list.links[4].href}>
              {text.notFound.list.links[4].linkText}
            </Link>
          </li>
          <li>
            <Link to={text.notFound.list.links[5].href}>
              {text.notFound.list.links[5].linkText}
            </Link>
          </li>
        </UL>
      </p>
    </Fragment>
  );
}
