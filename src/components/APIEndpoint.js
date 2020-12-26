import React from 'react';
import styled from 'styled-components';

import { codeBackground } from './styled-components/Themes';

export const APIEndpointContainer = props => {
  const { heading, description, link } = props;

  return (
    <StyledAPIEndpointContainer>
      <h3>{heading}</h3>
      {description ? <p>{description}</p> : ''}
      <a href={link} target="_blank" rel="noopener noreferrer">
        {link}
      </a>
    </StyledAPIEndpointContainer>
  );
};

const StyledAPIEndpointContainer = styled.div`
  background-color: ${codeBackground};
  border-radius: 10px;
  margin: 10px 0;
  padding: 20px;
  box-sizing: border-box;
`;
