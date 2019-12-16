import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  return (
    <StyledHeader>
      <div className="site-title">
        <Link to="/">Peter R. Stuhlmann Fotografie</Link>
        <p>People- und Landschaftsfotografie aus Berlin</p>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  text-transform: uppercase;

  @media (min-width: 768px) {
    padding: 20px;
  }

  @media (min-width: 1300px) {
    background-color: #fff;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 50px;
  }

  .site-title {
    display: none;
    text-align: left;

    a {
      color: #000;
      font-size: 25px;
      font-weight: bold;
      letter-spacing: 4px;
      margin-bottom: -30px;
      text-decoration: none;
    }

    p {
      color: #000;
      margin: 0;
    }

    @media (min-width: 768px) {
      display: block;
    }

    @media (max-width: 1300px) {
      text-align: center;
    }
  }
`;
