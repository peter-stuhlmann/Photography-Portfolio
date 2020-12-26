import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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

export default function MainNavigation(props) {
  const { header, toggleTracking, tracking, toggleTheming, themeMode } = props;

  const [open, setOpen] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <StyledMainNavigation ref={node}>
      <ToggleButton open={open} setOpen={setOpen} header={header} />
      <Navbar
        open={open}
        setOpen={setOpen}
        header={header}
        toggleTracking={toggleTracking}
        tracking={tracking}
        toggleTheming={toggleTheming}
        themeMode={themeMode}
      />
      <div className="site-title-mobile">
        <Link to="/">{header.siteTitle}</Link>
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

  @media (min-width: 1000px) and (max-width: 1649px) {
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
    font-size: 13px;

    @media (min-width: 360px) {
      font-size: 14px;
    }
    @media (min-width: 400px) {
      font-size: 16px;
    }

    @media (min-width: 1000px) {
      display: none;
    }

    a {
      color: ${textColor};
      letter-spacing: 1.5px;
      text-decoration: none;
    }
  }
`;
