import React from 'react';
import styled, { css } from 'styled-components';

import { textColor } from './Themes';

export const Heading = props => {
  const { className, h1, h2, h3, h4, h5, h6, title, style } = props;

  switch (true) {
    case h1:
      return (
        <H1 className={className} style={style}>
          {title}
        </H1>
      );
    case h2:
      return (
        <H2 className={className} style={style}>
          {title}
        </H2>
      );
    case h3:
      return (
        <H3 className={className} style={style}>
          {title}
        </H3>
      );
    case h4:
      return (
        <H4 className={className} style={style}>
          {title}
        </H4>
      );
    case h5:
      return (
        <H5 className={className} style={style}>
          {title}
        </H5>
      );
    case h6:
      return (
        <H6 className={className} style={style}>
          {title}
        </H6>
      );
    default:
      return (
        <H1 className={className} style={style}>
          {title}
        </H1>
      );
  }
};

const baseStyles = css`
  color: ${textColor};
  line-height: 1.2;
`;

const H1 = styled.h1`
  ${baseStyles}
  font-size: 32px;
`;

const H2 = styled.h2`
  ${baseStyles};
  font-size: 28px;
`;

const H3 = styled.h3`
  ${baseStyles};
  font-size: 23px;
`;

const H4 = styled.h4`
  ${baseStyles};
  font-size: 18px;
`;

const H5 = styled.h5`
  ${baseStyles};
  font-size: 16px;
`;
const H6 = styled.h6`
  ${baseStyles};
  font-size: 16px;
`;
