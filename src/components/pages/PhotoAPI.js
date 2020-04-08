import React, { Fragment, useContext } from 'react';
import styled from 'styled-components';

import { Context } from '../../Context';
import { TwoColumns } from '../styled-components/Columns';
import { codeBackground } from '../styled-components/Themes';
import { APIEndpointContainer } from '../APIEndpoint';
import { meta } from '../../helpers/meta';

export default function PhotoAPI() {
  const { text } = useContext(Context);

  document.title = text.api.meta.title;
  meta('name', 'description', text.api.meta.description);

  return (
    <Fragment>
      <h1>{text.api.heading}</h1>

      <TwoColumns columnLeft="0 0 48%" columnRight="0 0 48%">
        <div className="column-left">
          {text.api.text.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          {/* Hotlinking */}
          <h2>{text.api.hotlinking.heading}</h2>
          <p>{text.api.hotlinking.text}</p>

          {/* Enpoints */}
          <h2>{text.api.endpoints.heading}</h2>
          {text.api.endpoints.links.map(endpoint => (
            <APIEndpointContainer
              key={endpoint.link}
              heading={endpoint.heading}
              description={endpoint.description}
              link={endpoint.link}
            />
          ))}
        </div>
        <div className="column-right" style={{ overflowX: 'hidden' }}>
          <h2>{text.api.code.heading}</h2>
          <p>{text.api.code.description}</p>
          <Code
            dangerouslySetInnerHTML={{
              __html: text.api.code.content,
            }}
          />
        </div>
      </TwoColumns>
    </Fragment>
  );
}

const Code = styled.div`
  background-color: ${codeBackground};
  border-radius: 10px;
  font-family: monospace;
  font-size: 13px;
  padding: 20px;
  box-sizing: border-box;

  & > div {
    overflow-x: auto;

    .second-level {
      padding-left: 20px;
      white-space: nowrap;
    }

    .third-level {
      padding-left: 40px;
      white-space: nowrap;
    }
  }
`;
