import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  buttonBackgroundColor,
  buttonTextColor,
} from '../styled-components/Themes';
import { Pdf } from '../Icons';

export const ButtonLink = props => {
  const { external, href, linkText, title, style } = props;

  return external || href.substring(href.length - 4) === '.pdf' ? (
    <StyledButtonExternalLink
      href={href}
      style={style}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      {href.substring(href.length - 4) === '.pdf' ? <Pdf /> : null} {linkText}
    </StyledButtonExternalLink>
  ) : (
    <StyledButtonLink to={href} style={style} title={title}>
      {linkText}
    </StyledButtonLink>
  );
};

const StyledButtonLink = styled(Link)`
  background-color: ${buttonBackgroundColor};
  border-radius: 5px;
  color: ${buttonTextColor} !important;
  padding: 7px 15px;
  text-decoration: none;

  svg {
    fill: ${buttonTextColor};
    height: 16px;
    margin-bottom: -2px
    margin-right: 10px;
  }
`;

const StyledButtonExternalLink = styled.a`
  background-color: ${buttonBackgroundColor};
  border-radius: 5px;
  color: ${buttonTextColor} !important;
  padding: 7px 15px;
  text-decoration: none;

  svg {
    fill: ${buttonTextColor};
    height: 16px;
    margin-bottom: -2px
    margin-right: 5px;
  }
`;
