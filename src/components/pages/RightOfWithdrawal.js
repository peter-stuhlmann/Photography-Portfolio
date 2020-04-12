import React, { Fragment, useContext } from 'react';

import { Context } from '../../Context';
import { TwoColumns } from '../styled-components/Columns';
import { UL } from '../styled-components/List';
import { meta } from '../../helpers/meta';

export default function RightOfWithdrawal() {
  const { legal } = useContext(Context);

  document.title = legal.rightOfWithdrawal.meta.title;
  meta('name', 'description', legal.rightOfWithdrawal.meta.description);

  return (
    <Fragment>
      <h1>{legal.rightOfWithdrawal.heading}</h1>

      <TwoColumns columnLeft="0 0 48%" columnRight="0 0 48%">
        <div className="column-left">
          {legal.rightOfWithdrawal.content.map(paragraph => (
            <Fragment key={paragraph.heading}>
              <h2>{paragraph.heading}</h2>
              {paragraph.text.map(text => (
                <p key={text}>{text}</p>
              ))}
            </Fragment>
          ))}
        </div>
        <div className="column-right">
          <div
            style={{
              border: '1px solid #282828',
              marginBottom: '25px',
              padding: '25px',
            }}
          >
            <h2>{legal.rightOfWithdrawal.model.heading}</h2>
            <i>{legal.rightOfWithdrawal.model.description}</i>
            <UL>
              {legal.rightOfWithdrawal.model.list.map(item => (
                <li key={item}>{item}</li>
              ))}
            </UL>
            <i>{legal.rightOfWithdrawal.model.footnote}</i>
          </div>
          <a href={legal.rightOfWithdrawal.model.pdf.href}>
            {legal.rightOfWithdrawal.model.pdf.linkText}
          </a>
        </div>
      </TwoColumns>
    </Fragment>
  );
}
