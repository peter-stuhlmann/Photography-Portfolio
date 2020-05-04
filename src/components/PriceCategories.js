import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Context } from '../Context';

export default function PriceCategories() {
  const { text, setPriceCategoryIndex } = useContext(Context);

  const categoryPath = [
    '#portraits',
    '#akt',
    '#paare',
    '#landschaften',
    '#sonstiges',
    '#prints',
  ];

  const images = useRef(null);

  return (
    <StyledCategories>
      {text.prices.categories.map((category, index) => (
        <div key={category.href} ref={images}>
          <Link to={categoryPath[index]}>
            <img
              src={`https://image-placeholder.now.sh/?w=250&h=150&text=${category.title}&background=rgba(0,0,0,0.7)`}
              alt={category.alt}
              style={{ backgroundImage: `url(${category.img})` }}
              onClick={() => {
                setPriceCategoryIndex(index);
                window.scrollTo(0, images.current.offsetTop);
              }}
            />
          </Link>
        </div>
      ))}
    </StyledCategories>
  );
}

const StyledCategories = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 0 100px 0;

  div {
    flex: 0 0 15%;
    padding-top: 25px;

    img {
      background-position: center;
      background-size: cover;
      width: 100%;
    }
  }
`;
