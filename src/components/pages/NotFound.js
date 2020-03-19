import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context';
import { UL } from '../styled-components/List';

export default function NotFound() {
  const { text } = useContext(Context);

  return (
    <Fragment>
      <h1>{text.notFound.heading}</h1>
      <div>
        <h2>{text.notFound.list.heading}</h2>
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
