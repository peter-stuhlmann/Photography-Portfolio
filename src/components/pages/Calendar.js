import React, { Fragment } from 'react';

import { Image } from '../styled-components/Image';
import { TwoColumns } from '../styled-components/Columns';
import { ButtonLink } from '../styled-components/Buttons';
import { meta } from '../../helpers/meta';
import { Heading } from '../styled-components/Heading';
import calendar from '../../data/calendar';

export default function Calendar() {
  document.title = calendar.meta.title;
  meta('name', 'description', calendar.meta.description);

  return (
    <Fragment>
      <Heading h1 title={calendar.heading} />

      <TwoColumns columnLeft="0 0 48%" columnRight="0 0 48%">
        <div className="column-left">
          {calendar.content.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {calendar.links.map(link => (
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
            src={calendar.image.src}
            alt={calendar.image.alt}
            style={{ marginTop: '1em' }}
          />
        </div>
      </TwoColumns>
    </Fragment>
  );
}
