import React, { useContext } from 'react';

import { Context } from '../Context';
import { TwoColumns } from './styled-components/Columns';
import { Image } from './styled-components/Image';

export default function PricesIntro() {
  const { text } = useContext(Context);

  return (
    <TwoColumns columnLeft="0 0 48%" columnRight="0 0 48%">
      <div className="column-left">
        <p>{text.prices.intro}</p>
      </div>
      <div className="column-right">
        <Image
          src={text.prices.img[0].src}
          alt={text.prices.img[0].alt}
          title={text.prices.img[0].title}
          style={{ marginTop: '1em', marginBottom: '45px' }}
        />
      </div>
    </TwoColumns>
  );
}
