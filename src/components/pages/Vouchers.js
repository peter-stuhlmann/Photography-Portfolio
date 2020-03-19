import React, { Fragment, useContext } from 'react';

import { Context } from '../../Context';
import { Image } from '../styled-components/Image';
import { TwoColumns } from '../styled-components/Columns';

export default function Vouchers() {
  const { text } = useContext(Context);

  return (
    <Fragment>
      <h1>{text.vouchers.heading}</h1>
      <TwoColumns columnLeft="0 0 48%" columnRight="0 0 48%">
        <div className="column-left">
          <p>
            {text.vouchers.content[0]}
            <a title={text.vouchers.link.title} href={text.vouchers.link.href}>
              {text.vouchers.link.linkText}
            </a>
            {text.vouchers.content[1]}
          </p>
        </div>
        <div className="column-right">
          <Image src={text.vouchers.image.src} alt={text.vouchers.image.alt} />
        </div>
      </TwoColumns>
    </Fragment>
  );
}
