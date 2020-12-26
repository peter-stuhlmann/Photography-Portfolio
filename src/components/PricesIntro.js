import React from 'react';

import { TwoColumns } from './styled-components/Columns';
import { Image } from './styled-components/Image';

export default function PricesIntro(props) {
  const { prices } = props;

  return (
    <TwoColumns columnLeft="0 0 48%" columnRight="0 0 48%">
      <div className="column-left">
        <p>{prices.intro}</p>
      </div>
      <div className="column-right">
        <Image
          src={prices.img[0].src}
          alt={prices.img[0].alt}
          title={prices.img[0].title}
          style={{ marginTop: '1em', marginBottom: '45px' }}
        />
      </div>
    </TwoColumns>
  );
}
