import React, { Fragment } from 'react';

import { Image } from '../styled-components/Image';
import { TwoColumns } from '../styled-components/Columns';
import { ButtonLink } from '../styled-components/Buttons';
import { meta } from '../../helpers/meta';
import { Heading } from '../styled-components/Heading';
import vouchers from '../../data/vouchers';

export default function Vouchers() {
  document.title = vouchers.meta.title;
  meta('name', 'description', vouchers.meta.description);

  return (
    <Fragment>
      <Heading h1 title={vouchers.heading} />
      <TwoColumns columnLeft="0 0 48%" columnRight="0 0 48%">
        <div className="column-left">
          {vouchers.content.map(text => (
            <p key={text}>{text}</p>
          ))}
          <ButtonLink
            title={vouchers.link.title}
            href={vouchers.link.href}
            linkText={vouchers.link.linkText}
          />
        </div>
        <div className="column-right">
          <Image
            src={vouchers.image.src}
            alt={vouchers.image.alt}
            style={{ marginTop: '1em' }}
          />
        </div>
      </TwoColumns>
    </Fragment>
  );
}
