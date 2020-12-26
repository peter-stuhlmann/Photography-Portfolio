import React, { Fragment } from 'react';

import { TwoColumns } from '../styled-components/Columns';
import { Image } from '../styled-components/Image';
import Testimonials from '../Testimonials';
import { meta } from '../../helpers/meta';
import { Heading } from '../styled-components/Heading';
import about from '../../data/about';

export default function About() {
  document.title = about.meta.title;
  meta('name', 'description', about.meta.description);

  return (
    <Fragment>
      <Heading h1 title={about.heading} />

      <TwoColumns columnLeft="0 0 48%" columnRight="0 0 48%">
        <div className="column-left">
          {about.map(paragraph => (
            <p
              key={paragraph}
              dangerouslySetInnerHTML={{
                __html: paragraph,
              }}
            />
          ))}
        </div>
        <div className="column-right">
          <Image
            src={about.img[0].src}
            alt={about.img[0].alt}
            title={about.img[0].title}
            style={{ marginTop: '1em', marginBottom: '45px' }}
          />
        </div>
      </TwoColumns>
      <Testimonials />
    </Fragment>
  );
}
