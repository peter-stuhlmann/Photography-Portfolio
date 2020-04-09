import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context';
import styled from 'styled-components';
import { backgroundColor, textColor } from '../styled-components/Themes';

function Navbar({ open }) {
  const { text } = useContext(Context);

  return (
    <StyledNavbar open={open}>
      {window.innerWidth < 1000 ? (
        <h3 style={{ marginTop: '50px' }}>
          {text.footer.navigation.general.heading}
        </h3>
      ) : null}
      {text.header.navigation.map(links => (
        <Link key={links.href} to={links.href}>
          {links.linkText}
        </Link>
      ))}

      {window.innerWidth < 1000 ? (
        <Fragment>
          {text.footer.navigation.general.list.map(link => (
            <Link key={link.path} to={link.path}>
              {link.linkText}
            </Link>
          ))}

          <h3>{text.footer.navigation.products.heading}</h3>
          {text.footer.navigation.products.list.map(link => (
            <Link key={link.path} to={link.path}>
              {link.linkText}
            </Link>
          ))}

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

          <h3>{text.footer.navigation.languages.heading}</h3>
          {text.footer.navigation.languages.list.map(link => (
            <Link key={link.path} to={link.path}>
              {link.linkText}
            </Link>
          ))}

          <h3>{text.footer.navigation.legal.heading}</h3>
          {text.footer.navigation.legal.list.map(link => (
            <Link key={link.path} to={link.path}>
              {link.linkText}
            </Link>
          ))}
        </Fragment>
      ) : null}
    </StyledNavbar>
  );
}

export default Navbar;

const StyledNavbar = styled.nav`
  background-color: ${backgroundColor};
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
  transition: transform 0.3s ease-in-out;
  width: 444px;
  z-index: 1;

  @media (min-width: 1650px) {
    text-align: right;
  }

  a {
    color: ${textColor};
    font-size: 14px;
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
