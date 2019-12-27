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
          <Link to={text.footer.navigation.general.list[0].href}>
            {text.footer.navigation.general.list[0].linkText}
          </Link>
          <Link to={text.footer.navigation.general.list[1].href}>
            {text.footer.navigation.general.list[1].linkText}
          </Link>
          <Link to={text.footer.navigation.general.list[2].href}>
            {text.footer.navigation.general.list[2].linkText}
          </Link>
        </nav>
        <nav>
          <h3>{text.footer.navigation.languages.heading}</h3>
          <Link to={text.footer.navigation.languages.list[0].href}>
            {text.footer.navigation.languages.list[0].linkText}
          </Link>
          <Link to={text.footer.navigation.languages.list[1].href}>
            {text.footer.navigation.languages.list[1].linkText}
          </Link>
        </nav>
        <nav>
          <h3>{text.footer.navigation.products.heading}</h3>
          <Link to={text.footer.navigation.products.list[0].href}>
            {text.footer.navigation.products.list[0].linkText}
          </Link>
          <Link to={text.footer.navigation.products.list[1].href}>
            {text.footer.navigation.products.list[1].linkText}
          </Link>
        </nav>
        <nav>
          <h3>{text.footer.navigation.developers.heading}</h3>
          <Link to={text.footer.navigation.developers.list[0].href}>
            {text.footer.navigation.developers.list[0].linkText}
          </Link>
        </nav>
        <nav>
          <h3>{text.footer.navigation.links.heading}</h3>
          <a href={text.footer.navigation.links.list[0].href}>
            {text.footer.navigation.links.list[0].linkText}
          </a>
          <a href={text.footer.navigation.links.list[1].href}>
            {text.footer.navigation.links.list[1].linkText}
          </a>
        </nav>
        <nav />
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: #1c1c1c;
  font-size: 14px;

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

    nav {
      display: flex;
      flex: 0 0 20%;
      flex-direction: column;

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
