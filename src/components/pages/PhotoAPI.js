import React, { Fragment } from 'react';
import styled from 'styled-components';

import { TwoColumns } from '../styled-components/Columns';
import { codeBackground } from '../styled-components/Themes';
import { APIEndpointContainer } from '../APIEndpoint';
import { meta } from '../../helpers/meta';
import { Heading } from '../styled-components/Heading';
import api from '../../data/api';

export default function PhotoAPI() {
  document.title = api.meta.title;
  meta('name', 'description', api.meta.description);

  return (
    <Fragment>
      <Heading h1 title={api.heading} />

      <TwoColumns columnLeft="0 0 48%" columnRight="0 0 48%">
        <div className="column-left">
          {api.text.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          {/* Hotlinking */}
          <Heading h2 title={api.hotlinking.heading} />
          <p>{api.hotlinking.text}</p>

          {/* Enpoints */}
          <Heading h2 title={api.endpoints.heading} />
          {api.endpoints.links.map(endpoint => (
            <APIEndpointContainer
              key={endpoint.link}
              heading={endpoint.heading}
              description={endpoint.description}
              link={endpoint.link}
            />
          ))}
        </div>
        <div className="column-right" style={{ overflowX: 'hidden' }}>
          <Heading h2 title={api.code.heading} />
          <p>{api.code.description}</p>
          <Code
            dangerouslySetInnerHTML={{
              __html: api.code.content,
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

    .fourth-level {
      padding-left: 60px;
      white-space: nowrap;
    }
  }
`;
