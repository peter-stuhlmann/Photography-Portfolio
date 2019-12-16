import React from 'react';
import styled from 'styled-components';

const StyledUnorderedList = styled.ul`
  padding: 15px;

  a {
    color: #282828;
    text-decoration: none;
  }
`;

export const UL = props => {
  const { children } = props;
  return <StyledUnorderedList>{children}</StyledUnorderedList>;
};
