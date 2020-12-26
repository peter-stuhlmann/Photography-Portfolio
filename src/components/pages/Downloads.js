import React, { Fragment, useContext } from 'react';

import { Context } from '../../Context';
import { TwoColumns } from '../styled-components/Columns';
import { Image } from '../styled-components/Image';
import { UL } from '../styled-components/List';
import { meta } from '../../helpers/meta';
import { Heading } from '../styled-components/Heading';

export default function Downloads() {
  const { text } = useContext(Context);

  document.title = text.downloads.meta.title;
  meta('name', 'description', text.downloads.meta.description);

  return (
    <Fragment>
      <Heading h1 title={text.downloads.heading} />

      <TwoColumns columnLeft="0 0 48%" columnRight="0 0 48%">
        <div className="column-left">
          {text.downloads.text.map(paragraphs => (
            <p style={{ marginBottom: '25px' }} key={paragraphs}>
              {paragraphs}
            </p>
          ))}

          <UL>
            {text.downloads.files.map(file => (
              <li key={file.path}>
                <a href={file.path} style={{ fontWeight: 'bold' }}>
                  {file.linkText}
                </a>
                {file.description ? (
                  <p style={{ fontStyle: 'italic' }}>{file.description}</p>
                ) : null}
              </li>
            ))}
          </UL>
        </div>

        <div className="column-right">
          <Image
            src={text.downloads.img[0].src}
            alt={text.downloads.img[0].alt}
            title={text.downloads.img[0].title}
            style={{ marginTop: '1em', marginBottom: '45px' }}
          />
        </div>
      </TwoColumns>
    </Fragment>
  );
}
