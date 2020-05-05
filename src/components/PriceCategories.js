import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Context } from '../Context';

export default function PriceCategories() {
  const { text, priceCategoryIndex, setPriceCategoryIndex } = useContext(
    Context
  );

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
    <StyledCategories ref={images}>
      {text.prices.categories.map((category, index) => (
        <div
          key={category.href}
          onClick={() => {
            setPriceCategoryIndex(index);
            window.scrollTo(0, images.current.offsetTop);
          }}
          className={priceCategoryIndex === index ? 'selected' : null}
        >
          <Link to={categoryPath[index]}>
            <img style={{ backgroundImage: `url(${category.img})` }} />
            <p>{category.title}</p>
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
  padding-top: 25px;

  div {
    flex: 0 0 15%;
    height: 150px;
    overflow: hidden;
    position: relative;

    &:hover:not(.selected) {
      img {
        filter: grayscale(0%);
        transform: scale(1.05);
      }
      p {
        background-color: rgba(0, 0, 0, 0.8);
      }
    }

    p {
      box-sizing: border-box;
      color: #fff;
      margin: 0;
      position: absolute;
      padding: 7px 10px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      transition: 0.3s;
      width: calc(100% - 20px);
    }

    img {
      background-position: center;
      background-size: cover;
      box-sizing: border-box;
      filter: grayscale(100%) brightness(30%);
      height: 150px;
      transition: 0.4s;
      width: 100%;
    }
  }

  .selected {
    img {
      transition: 0.4s;
      transform: scale(1.05);
      filter: grayscale(0) brightness(100%);
    }

    p {
      display: none;
    }
  }
`;
