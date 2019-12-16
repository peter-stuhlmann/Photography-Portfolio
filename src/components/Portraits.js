import React from 'react';
import Gallery from 'react-photo-gallery';
import { Wrapper } from './styled-components/Wrapper';
import { portraits } from '../data/Photos';

export default function Portraits() {
  return (
    <Wrapper>
      <Gallery photos={portraits} />
    </Wrapper>
  );
}
