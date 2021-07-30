import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

import { headerBackgroundColor, textColor } from '../styled-components/Themes';
import { Heading } from '../styled-components/Heading';
import footer from '../../data/footer';

function Navbar(props) {
  const {
    open,
    setOpen,
    header,
    tracking,
    setTracking,
    themeMode,
    setThemeMode,
  } = props;

  let button;
  tracking === false
    ? (button = 'Google Analytics aktivieren')
    : (button = 'Google Analytics deaktivieren');

  let themeModeButton;
  themeMode === 'light'
    ? (themeModeButton = 'Dark Theme')
    : (themeModeButton = 'Light Theme');
  return (
    <StyledNavbar open={open}>
      {window.innerWidth < 1000 ? (
        <Heading
          h3
          style={{ marginTop: '50px' }}
          title={footer.navigation.general.heading}
        />
      ) : null}
      {header.navigation.map(links => (
        <Link key={links.href} to={links.href} onClick={() => setOpen(false)}>
          {links.linkText}
        </Link>
      ))}
      <ThemeModeToggle
        onClick={() => {
          setThemeMode(themeMode === 'light' ? 'dark' : 'light');
          setOpen(false);
        }}
      >
        {themeMode === 'light' ? <Brightness2Icon /> : <WbSunnyIcon />}
      </ThemeModeToggle>

      {window.innerWidth < 1000 ? (
        <Fragment>
          {footer.navigation.general.list.map(link => (
            <Link key={link.path} to={link.path} onClick={() => setOpen(false)}>
              {link.linkText}
            </Link>
          ))}
          <span
            onClick={() => {
              setThemeMode(themeMode === 'light' ? 'dark' : 'light');
              setOpen(false);
            }}
          >
            {themeModeButton}
          </span>

          <Heading h3 title={footer.navigation.products.heading} />
          {footer.navigation.products.list.map(link => (
            <Link key={link.path} to={link.path} onClick={() => setOpen(false)}>
              {link.linkText}
            </Link>
          ))}

          <Heading h3 title={footer.navigation.links.heading} />
          {footer.navigation.links.list.map(link => (
            <a
              key={link.href}
              target="_blank"
              rel="noopener noreferrer"
              href={link.href}
            >
              {link.linkText}
            </a>
          ))}

          <Heading h3 title={footer.navigation.languages.heading} />
          {footer.navigation.languages.list.map(link => (
            <Link key={link.path} to={link.path} onClick={() => setOpen(false)}>
              {link.linkText}
            </Link>
          ))}

          <Heading h3 title={footer.navigation.legal.heading} />
          {footer.navigation.legal.list.map(link => (
            <Link key={link.path} to={link.path} onClick={() => setOpen(false)}>
              {link.linkText}
            </Link>
          ))}
          <span
            onClick={() => {
              setTracking(!tracking);
              setOpen(false);
            }}
          >
            {button}
          </span>
        </Fragment>
      ) : null}
    </StyledNavbar>
  );
}

export default Navbar;

const StyledNavbar = styled.nav`
  background-color: ${headerBackgroundColor};
  transition: 0.3s;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.75);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: 0;
  max-width: 100vw;
  overflow-y: auto;
  padding: 0;
  position: fixed;
  text-align: left;
  top: 0;
  transform: ${({ open }) =>
    open ? 'translateX(0)' : 'translateX(calc(-100% - 7px))'};
  width: 444px;
  z-index: 1;

  @media (min-width: 1650px) {
    text-align: right;
  }

  a,
  span {
    color: ${textColor};
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1.5px;
    padding: 7px 12px;
    text-decoration: none;
    transition: 0.2s;

    @media (min-width: 768px) {
      &:hover {
        color: #b0b0b0;
      }
    }

    &:first-child {
      margin-top: 45px;
    }
  }

  h3 {
    padding: 7px 12px;
  }

  @media (min-width: 1000px) {
    box-shadow: none;
    display: block;
    height: 30px;
    margin: 0 auto;
    max-width: 100%;
    overflow-y: hidden;
    padding: 2px 0;
    position: static;
    text-align: center;
    transform: translateX(0);
    width: 100%;
  }
`;

const ThemeModeToggle = styled.div`
  cursor: pointer;
  display: inline-block;
  margin-left: 10px;
  vertical-align: top;

  @media (max-width: 1000px) {
    display: none;
  }
`;
