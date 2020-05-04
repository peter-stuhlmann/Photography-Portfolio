import React, { Fragment, useContext } from 'react';
import styled from 'styled-components';

import { Context } from '../../Context';
import { TwoColumns } from '../styled-components/Columns';
import { UL } from '../styled-components/List';
import { textColor } from '../styled-components/Themes';
import { ButtonLink } from '../styled-components/Buttons';
import { meta } from '../../helpers/meta';
import { Heading } from '../styled-components/Heading';

export default function RightOfWithdrawal() {
  const { legal } = useContext(Context);

  document.title = legal.rightOfWithdrawal.meta.title;
  meta('name', 'description', legal.rightOfWithdrawal.meta.description);

  return (
    <Fragment>
      <Heading h1 title={legal.rightOfWithdrawal.heading} />

      <TwoColumns columnLeft="0 0 48%" columnRight="0 0 48%">
        <div className="column-left">
          {legal.rightOfWithdrawal.content.map(paragraph => (
            <Fragment key={paragraph.heading}>
              <Heading h2 title={paragraph.heading} />
              {paragraph.text.map(text => (
                <p key={text}>{text}</p>
              ))}
            </Fragment>
          ))}
        </div>
        <div className="column-right">
          <Box>
            <Heading h2 title={legal.rightOfWithdrawal.model.heading} />
            <i>{legal.rightOfWithdrawal.model.description}</i>
            <UL>
              {legal.rightOfWithdrawal.model.list.map(item => (
                <li key={item}>{item}</li>
              ))}
            </UL>
            <i>{legal.rightOfWithdrawal.model.footnote}</i>
          </Box>
          <ButtonLink
            pdf
            href={legal.rightOfWithdrawal.model.pdf.href}
            linkText={legal.rightOfWithdrawal.model.pdf.linkText}
          />
        </div>
      </TwoColumns>
    </Fragment>
  );
}

const Box = styled.div`
  border: 1px solid ${textColor};
  margin-bottom: 25px;
  padding: 25px;
`;
