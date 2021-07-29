import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MainNavigation from './MainNavigation/MainNavigation';
import {
  headerBackgroundColor,
  textColor,
  headerBoxShadow,
} from './styled-components/Themes';
import header from '../data/header';

export default function Header(props) {
  const { setTracking, tracking, themeMode, setThemeMode } = props;

  return (
    <StyledHeader>
      <div className="site-title">
        <Link to="/">{header.siteTitle}</Link>
        <p>{header.siteDescription}</p>
      </div>
      <MainNavigation
        header={header}
        setTracking={setTracking}
        tracking={tracking}
        themeMode={themeMode}
        setThemeMode={setThemeMode}
      />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  text-transform: uppercase;
  background-color: ${headerBackgroundColor};
  box-shadow: ${headerBoxShadow};

  @media (min-width: 1000px) {
    padding: 50px 20px 20px 20px;
  }

  @media (min-width: 1650px) {
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
      font-size: 16px;
      letter-spacing: 1.5px;
      margin: 0;
    }

    @media (min-width: 1000px) {
      display: block;
    }

    @media (max-width: 1649px) {
      text-align: center;
    }
  }
`;
