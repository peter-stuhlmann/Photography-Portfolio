import React from 'react';
import styled from 'styled-components';

const StyledUnorderedList = styled.ul`
  padding: ${props => props.paddingX || '15px'};

  li {
    list-style-type: ${props => props.listStyleType || 'disc'};

    a {
      color: #282828;
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
