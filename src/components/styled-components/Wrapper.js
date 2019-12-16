import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 15px;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 50px;
  }
`;

export const Wrapper = props => {
  const { children } = props;
  return <StyledWrapper>{children}</StyledWrapper>;
};
