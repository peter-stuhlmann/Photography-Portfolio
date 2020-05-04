import React, { Fragment, useContext } from 'react';

import { Context } from '../../Context';
import { Image } from '../styled-components/Image';
import { TwoColumns } from '../styled-components/Columns';
import { ButtonLink } from '../styled-components/Buttons';
import { meta } from '../../helpers/meta';
import { Heading } from '../styled-components/Heading';

export default function Calendar() {
  const { text } = useContext(Context);

  document.title = text.calendar.meta.title;
  meta('name', 'description', text.calendar.meta.description);

  return (
    <Fragment>
      <Heading h1 title={text.calendar.heading} />

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
