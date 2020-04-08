import React, { Fragment, useContext } from 'react';
import { Context } from '../../Context';
import { TwoColumns } from '../styled-components/Columns';
import { Image } from '../styled-components/Image';
import Testimonials from '../Testimonials';
import { meta } from '../../helpers/meta';

export default function About() {
  const { text } = useContext(Context);

  document.title = text.about.meta.title;
  meta('name', 'description', text.about.meta.description);

  return (
    <Fragment>
      <h1>{text.about.heading}</h1>

      <TwoColumns columnLeft="0 0 48%" columnRight="0 0 48%">
        <div className="column-left">
          <blockquote>
            <p>
              <i>{text.about.quote.text}</i>
            </p>
            <p>
              <i>{text.about.quote.author}</i>
            </p>
          </blockquote>

          <div
            dangerouslySetInnerHTML={{
              __html: text.about.text,
            }}
            style={{ marginBottom: '25px' }}
          />
        </div>
        <div className="column-right">
          <Image
            src={text.about.img[0].src}
            alt={text.about.img[0].alt}
            title={text.about.img[0].title}
            style={{ marginTop: '1em', marginBottom: '45px' }}
          />
        </div>
      </TwoColumns>

      <Testimonials />
    </Fragment>
  );
}
