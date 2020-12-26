import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import subFooter from '../data/subFooter';
import consoleLog from '../data/console';

export default function SubFooter() {
  const currentYear = new Date().getFullYear();

  console.log(
    `%c\n${consoleLog.heading}\n` +
      `%c${consoleLog.text}\n` +
      `%c${consoleLog.link}\n`,
    'color: #282828; font-size: 23px',
    'color: #282828; font-size: 14px',
    'font-size: 14px'
  );

  return (
    <StyledSubFooter>
      <div>
        <p>
          <Link to="/">&copy; {subFooter.copyright}</Link>, 2016-
          {currentYear}
        </p>
        <p>
          {subFooter.developer.title}
          <a
            href={subFooter.developer.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {subFooter.developer.name}
          </a>
          .
        </p>
      </div>
    </StyledSubFooter>
  );
}

const StyledSubFooter = styled.footer`
  background-color: #282828;
  font-size: 14px;
  // text-transform: uppercase;

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

    // nav is currently not used
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
