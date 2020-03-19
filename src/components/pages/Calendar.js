import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../../Context';
import { Image } from '../styled-components/Image';
import { TwoColumns } from '../styled-components/Columns';
import { ButtonLink } from '../styled-components/Buttons';

export default function Calendar() {
  const { text } = useContext(Context);

  return (
    <Fragment>
      <h1>{text.calendar.heading}</h1>
      <TwoColumns columnLeft="0 0 48%" columnRight="0 0 48%">
        <div className="column-left">
          {text.calendar.content.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {text.calendar.links.map(link => (
            <ButtonLink
              key={link.href}
              href={link.href}
              linkText={link.linkText}
              title={link.title}
            />
          ))}
        </div>
        <div className="column-right">
          <Image
            src={text.calendar.image.src}
            alt={text.calendar.image.alt}
            style={{ marginTop: '1em' }}
          />
        </div>
      </TwoColumns>
    </Fragment>
  );
}
