import React, { Fragment } from 'react';
import styled from 'styled-components';

import { TwoColumns } from '../styled-components/Columns';
import { UL } from '../styled-components/List';
import { textColor } from '../styled-components/Themes';
import { ButtonLink } from '../styled-components/Buttons';
import { meta } from '../../helpers/meta';
import { Heading } from '../styled-components/Heading';
import rightOfWithdrawal from '../../data/rightOfWithdrawal';

export default function RightOfWithdrawal() {
  document.title = rightOfWithdrawal.meta.title;
  meta('name', 'description', rightOfWithdrawal.meta.description);

  return (
    <Fragment>
      <Heading h1 title={rightOfWithdrawal.heading} />

      <TwoColumns columnLeft="0 0 48%" columnRight="0 0 48%">
        <div className="column-left">
          {rightOfWithdrawal.content.map(paragraph => (
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
            <Heading h2 title={rightOfWithdrawal.model.heading} />
            <i>{rightOfWithdrawal.model.description}</i>
            <UL>
              {rightOfWithdrawal.model.list.map(item => (
                <li key={item}>{item}</li>
              ))}
            </UL>
            <i>{rightOfWithdrawal.model.footnote}</i>
          </Box>
          <ButtonLink
            pdf
            href={rightOfWithdrawal.model.pdf.href}
            linkText={rightOfWithdrawal.model.pdf.linkText}
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
