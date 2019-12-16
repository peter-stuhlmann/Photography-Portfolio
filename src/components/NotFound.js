import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { UL } from './styled-components/List';

export default function NotFound() {
  return (
    <Fragment>
      <h1>Die Seite wurde nicht gefunden...</h1>
      <p>
        Suchst Du eine der folgenden Seiten?
        <UL>
          <li>
            <Link to="/">Portraits</Link>
          </li>
          <li>
            <Link to="/akt">Akt &amp; Erotik</Link>
          </li>
          <li>
            <Link to="/landschaftsfotografie">
              Landschafts- und Architekturfotografie
            </Link>
          </li>
          <li>
            <Link to="/ueber-mich">Über mich</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/kontakt">Kontakt</Link>
          </li>
        </UL>
      </p>
    </Fragment>
  );
}
