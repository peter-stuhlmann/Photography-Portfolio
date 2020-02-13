import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';
import styled from 'styled-components';

export default function Footer() {
  const { text } = useContext(Context);

  return (
    <StyledFooter>
      <div>
        <nav>
          <h3>{text.footer.navigation.general.heading}</h3>
          {text.footer.navigation.general.list.map(links => (
            <Link key={links.href} to={links.href}>
              {links.linkText}
            </Link>
          ))}
        </nav>
        <nav>
          <h3>{text.footer.navigation.languages.heading}</h3>
          {text.footer.navigation.languages.list.map(links => (
            <Link key={links.href} to={links.href}>
              {links.linkText}
            </Link>
          ))}
        </nav>
        <nav>
          <h3>{text.footer.navigation.products.heading}</h3>
          {text.footer.navigation.products.list.map(links => (
            <Link key={links.href} to={links.href}>
              {links.linkText}
            </Link>
          ))}
        </nav>
        <nav>
          <h3>{text.footer.navigation.developers.heading}</h3>
          {text.footer.navigation.developers.list.map(links => (
            <Link key={links.href} to={links.href}>
              {links.linkText}
            </Link>
          ))}
        </nav>
        <nav>
          <h3>{text.footer.navigation.links.heading}</h3>
          {text.footer.navigation.links.list.map(links => (
            <a key={links.href} href={links.href}>
              {links.linkText}
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
      }

      a {
        color: #fff;
        padding: 7px 0;
        text-decoration: none;

        @media screen and (max-width: 768px) {
          text-align: center;
        }
      }
    }
  }
`;
