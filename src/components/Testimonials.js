import React, { Fragment, useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Context';

export default function Testimonials() {
  const { text } = useContext(Context);

  return (
    <Fragment>
      <h1>{text.testimonials.heading}</h1>
      {text.testimonials.cards.map(cards => (
        <TestimonialCard key={cards.img}>
          <div>
            <img src={cards.img} alt={cards.name} />
          </div>
          <p>
            <span>{cards.name}</span> {cards.quote} <span>{cards.name}</span>
          </p>
        </TestimonialCard>
      ))}
    </Fragment>
  );
}

const TestimonialCard = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 45px;

  @media screen and (min-width: 700px) {
    margin-bottom: 25px;
  }

  div {
    flex: 0 0 100%;
    text-align: center;

    @media screen and (min-width: 700px) {
      flex: 0 0 150px;
      text-align: left;
    }

    img {
      border-radius: 50%;
      margin-right: 0;
      width: 150px;

      @media screen and (min-width: 700px) {
        margin-right: 35px;
      }
    }
  }

  p {
    display: 
    flex: 0 0 100%;
    margin: 0;

    @media screen and (min-width: 700px) {
      flex: 0 0 calc(100% - 150px - 35px);
    }
  }

  span {
    // mobile screens < 700px
    &:first-child {
      display: block;
      text-align: center;
      font-style: italic;

      @media screen and (min-width: 700px) {
        display: none;
      }
    }

    // desktop screens >= 700px
    &:last-child {
      display: none;
      font-style: italic;
      float: right;

      @media screen and (min-width: 700px) {
        display: inline-block;
      }
    }
  }
`;
