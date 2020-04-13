import React, { Fragment, useContext } from 'react';

import { Context } from '../../Context';
import { Image } from '../styled-components/Image';
import { TwoColumns } from '../styled-components/Columns';
import { ButtonLink } from '../styled-components/Buttons';
import { meta } from '../../helpers/meta';

export default function Vouchers() {
  const { text } = useContext(Context);

  document.title = text.vouchers.meta.title;
  meta('name', 'description', text.vouchers.meta.description);

  return (
    <Fragment>
      <h1>{text.vouchers.heading}</h1>
      <TwoColumns columnLeft="0 0 48%" columnRight="0 0 48%">
        <div className="column-left">
          {text.vouchers.content.map(text => (
            <p key={text}>{text}</p>
          ))}
          <ButtonLink
            title={text.vouchers.link.title}
            href={text.vouchers.link.href}
            linkText={text.vouchers.link.linkText}
          />
        </div>
        <div className="column-right">
          <Image
            src={text.vouchers.image.src}
            alt={text.vouchers.image.alt}
            style={{ marginTop: '1em' }}
          />
        </div>
      </TwoColumns>
    </Fragment>
  );
}
