import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.div`
  img {
    width: 100%;
  }

  .caption {
    display: block;
    font-size: 13px;
    font-style: italic;
    margin-top: -7px;
    text-align: right;
  }
`;

export const Image = props => {
  const { alt, caption, src, title } = props;
  return (
    <StyledImage>
      <img alt={alt} src={src} title={title} />
      <div className="caption">{caption}</div>
    </StyledImage>
  );
};
