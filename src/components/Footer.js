import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';
import styled from 'styled-components';

export default function Footer() {
  const {
    text,
    toggleTracking,
    tracking,
    toggleTheming,
    themeMode,
  } = useContext(Context);

  let button;
  tracking === false
    ? (button = 'Google Analytics aktivieren')
    : (button = 'Google Analytics deaktivieren');

  let themeModeButton;
  themeMode === 'light'
    ? (themeModeButton = 'Dark Theme')
    : (themeModeButton = 'Light Theme');

  return (
    <StyledFooter>
      <div>
        <nav>
          <h3>{text.footer.navigation.general.heading}</h3>
          <span onClick={toggleTheming}>{themeModeButton}</span>
          {text.footer.navigation.general.list.map(link => (
            <Link key={link.path} to={link.path}>
              {link.linkText}
            </Link>
          ))}
        </nav>
        <nav>
          <h3>{text.footer.navigation.legal.heading}</h3>
          {text.footer.navigation.legal.list.map(link => (
            <Link key={link.path} to={link.path}>
              {link.linkText}
            </Link>
          ))}
          <span onClick={toggleTracking}>{button}</span>
        </nav>
        <nav>
          <h3>{text.footer.navigation.languages.heading}</h3>
          {text.footer.navigation.languages.list.map(link => (
            <Link key={link.path} to={link.path}>
              {link.linkText}
            </Link>
          ))}
        </nav>
        <nav>
          <h3>{text.footer.navigation.products.heading}</h3>
          {text.footer.navigation.products.list.map(link => (
            <Link key={link.path} to={link.path}>
              {link.linkText}
            </Link>
          ))}
        </nav>
        <nav>
          <h3>{text.footer.navigation.links.heading}</h3>
          {text.footer.navigation.links.list.map(link => (
            <a
              key={link.href}
              target="_blank"
              rel="noopener noreferrer"
              href={link.href}
            >
              {link.linkText}
            </a>
          ))}
        </nav>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: #1c1c1c;
  font-size: 14px;

  @media screen and (max-width: 1150px) {
    font-size: 13px;
  }

  @media screen and (max-width: 1000px) {
    font-size: 14px;
  }

  div {
    box-sizing: border-box;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 0 auto;
    padding: 40px 50px;
    width: 100%;

    @media screen and (min-width: 768px) {
      justify-content: flex-start;
    }

    @media screen and (min-width: 1000px) {
      justify-content: space-between;
    }

    nav {
      display: flex;
      flex: 0 0 20%;
      flex-direction: column;

      @media screen and (max-width: 1000px) {
        flex: 0 0 33.33333%;
        margin-top: 30px;
      }

      @media screen and (max-width: 768px) {
        flex: 0 0 100%;
        margin-top: 15px;
        text-align: center;
      }

      h3 {
        color: #fff;
        font-weight: normal;
        text-transform: uppercase;

        @media screen and (max-width: 768px) {
          font-weight: bold;
        }
      }

      a,
      span {
        color: #fff;
        cursor: pointer;
        padding: 7px 0;
        text-decoration: none;

        @media screen and (max-width: 768px) {
          text-align: center;
        }
      }
    }
  }
`;
