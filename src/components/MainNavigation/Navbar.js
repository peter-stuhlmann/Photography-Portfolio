import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context';
import styled from 'styled-components';

function Navbar({ open }) {
  const { text } = useContext(Context);

  return (
    <StyledNavbar open={open}>
      <Link to={text.header.navigation[0].href}>
        {text.header.navigation[0].linkText}
      </Link>
      <Link to={text.header.navigation[1].href}>
        {text.header.navigation[1].linkText}
      </Link>
      <Link to={text.header.navigation[2].href}>
        {text.header.navigation[2].linkText}
      </Link>
      <Link to={text.header.navigation[3].href}>
        {text.header.navigation[3].linkText}
      </Link>
      <Link to={text.header.navigation[4].href}>
        {text.header.navigation[4].linkText}
      </Link>
      <Link to={text.header.navigation[5].href}>
        {text.header.navigation[5].linkText}
      </Link>
    </StyledNavbar>
  );
}

export default Navbar;

const StyledNavbar = styled.nav`
  background-color: #fff;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.75);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: 0;
  max-width: 80vw;
  overflow-y: auto;
  padding: 0;
  position: fixed;
  text-align: left;
  top: 0;
  transform: ${({ open }) =>
    open ? 'translateX(0)' : 'translateX(calc(-100% - 7px))'};
  transition: transform 0.3s ease-in-out;
  width: 300px;

  @media (min-width: 1300px) {
    text-align: right;
  }

  a {
    color: #000;
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

  @media (min-width: 768px) {
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
