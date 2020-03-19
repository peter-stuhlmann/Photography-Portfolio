import React from 'react';
import styled from 'styled-components';

import {
  buttonBackgroundColor,
  buttonTextColor,
} from '../styled-components/Themes';

export const ButtonLink = props => {
  const { href, linkText, title, style } = props;

  return (
    <StyledButtonLink
      href={href}
      style={style}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      {linkText}
    </StyledButtonLink>
  );
};

const StyledButtonLink = styled.a`
  background-color: ${buttonBackgroundColor};
  border-radius: 5px;
  color: ${buttonTextColor};
  padding: 7px 15px;
  text-decoration: none;
`;
