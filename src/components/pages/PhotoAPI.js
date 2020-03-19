import React, { Fragment, useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../Context';
import { TwoColumns } from '../styled-components/Columns';

export default function PhotoAPI() {
  const { text } = useContext(Context);

  return (
    <Fragment>
      <h1>{text.api.heading}</h1>

      <TwoColumns columnLeft="0 0 48%" columnRight="0 0 48%">
        <div className="column-left">
          <p>{text.api.text}</p>
        </div>
        <div className="column-right">
          <Code
            dangerouslySetInnerHTML={{
              __html: text.api.code,
            }}
          />
        </div>
      </TwoColumns>
    </Fragment>
  );
}

const Code = styled.div`
  background-color: #ededed;
  border-radius: 10px;
  font-family: monospace;
  font-size: 13px;
  padding: 20px;

  .second-level {
    padding-left: 20px;
  }

  .third-level {
    padding-left: 40px;
  }
`;
