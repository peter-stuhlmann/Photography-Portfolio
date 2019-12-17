import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';
import styled from 'styled-components';

export default function Footer() {
  const { text } = useContext(Context);

  return (
    <StyledFooter>
      <div>
        <p>
          <Link to="/">&copy; {text.subFooter.copyright}</Link>, 2019
        </p>
        <nav>
          <Link to={text.subFooter.navigation[0].href}>
            {text.subFooter.navigation[0].linkText}
          </Link>
          <Link to={text.subFooter.navigation[1].href}>
            {text.subFooter.navigation[1].linkText}
          </Link>
        </nav>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: #282828;
  font-size: 14px;
  text-transform: uppercase;

  div {
    box-sizing: border-box;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 0 auto;
    padding: 40px 50px;
    width: 100%;

    @media screen and (min-width: 1300px) {
      justify-content: space-between;
    }

    p {
      align-self: center;
      color: #fff;
      margin: 0;

      @media screen and (max-width: 1300px) {
        flex: 0 0 100%;
        text-align: center;
      }

      a {
        color: #fff;
        text-decoration: none;

        @media screen and (max-width: 768px) {
          flex: 0 0 100%;
          text-align: center;
        }
      }
    }

    nav {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;

      @media screen and (max-width: 768px) {
        flex: 0 0 100%;
        margin-top: 15px;
        text-align: center;
      }

      a {
        color: #fff;
        padding: 7px 12px;
        text-decoration: none;

        @media screen and (max-width: 768px) {
          flex: 0 0 100%;
          text-align: center;
        }
      }
    }
  }
`;
