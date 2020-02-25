import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Context } from '../../Context';
import ToggleButton from './ToggleButton';
import Navbar from './Navbar';
import { textColor, backgroundColor } from '../styled-components/Themes';

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

export default function MainNavigation() {
  const { text } = useContext(Context);

  const [open, setOpen] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <StyledMainNavigation ref={node}>
      <ToggleButton open={open} setOpen={setOpen} />
      <Navbar open={open} setOpen={setOpen} />
      <div className="site-title-mobile">
        <Link to="/">{text.header.siteTitle}</Link>
      </div>
    </StyledMainNavigation>
  );
}

const StyledMainNavigation = styled.div`
  background-color: ${backgroundColor};
  display: flex;
  padding: 15px;

  @media (min-width: 1650px) {
    padding: 0;
  }

  @media (min-width: 768px) and (max-width: 1649px) {
    margin-top: 25px;
  }

  a {
    font-weight: bold;
    letter-spacing: 1.5px;
  }

  .site-title-mobile {
    margin-left: 15px;
    text-align: center;
    width: 100%;

    @media (min-width: 768px) {
      display: none;
    }

    a {
      color: ${textColor};
      letter-spacing: 1.5px;
      text-decoration: none;
    }
  }
`;
