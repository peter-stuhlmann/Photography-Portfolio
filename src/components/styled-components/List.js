import React from 'react';
import styled from 'styled-components';
import { textColor } from './Themes';

const StyledUnorderedList = styled.ul`
  padding: ${props => props.paddingX || '15px'};

  li {
    list-style-type: ${props => props.listStyleType || 'disc'};

    a {
      color: ${textColor};
      text-decoration: none;
    }
  }
`;

export const UL = props => {
  const { children, listStyleType, paddingX } = props;
  return (
    <StyledUnorderedList listStyleType={listStyleType} paddingX={paddingX}>
      {children}
    </StyledUnorderedList>
  );
};
