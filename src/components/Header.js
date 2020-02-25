import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';
import styled from 'styled-components';
import MainNavigation from './MainNavigation/MainNavigation';
import { backgroundColor, textColor } from './styled-components/Themes';

export default function Header() {
  const { text } = useContext(Context);

  return (
    <StyledHeader>
      <div className="site-title">
        <Link to="/">{text.header.siteTitle}</Link>
        <p>{text.header.siteDescription}</p>
      </div>
      <MainNavigation />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  text-transform: uppercase;

  @media (min-width: 768px) {
    padding: 50px 20px 20px 20px;
  }

  @media (min-width: 1650px) {
    background-color: ${backgroundColor};
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 50px;
  }

  .site-title {
    display: none;
    text-align: left;

    a {
      color: ${textColor};
      font-size: 25px;
      font-weight: bold;
      letter-spacing: 4px;
      margin-bottom: -30px;
      text-decoration: none;

      @media (max-width: 1649px) {
        font-size: 38px;
      }
    }

    p {
      color: ${textColor};
      letter-spacing: 1.5px;
      margin: 0;
    }

    @media (min-width: 768px) {
      display: block;
    }

    @media (max-width: 1649px) {
      text-align: center;
    }
  }
`;
