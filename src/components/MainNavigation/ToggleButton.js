import React from 'react';
import styled from 'styled-components';
import { textColor } from '../styled-components/Themes';

const ToggleButton = ({ open, setOpen }) => (
  <StyledToggleButton open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
  </StyledToggleButton>
);

export default ToggleButton;

const StyledToggleButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 25px;
  justify-content: space-around;
  padding: 0;
  width: 26px;
  z-index: 2;

  &:focus {
    outline: none;
  }

  div {
    background-color: ${textColor};
    border-radius: 10px;
    height: 3px;
    position: relative;
    transform-origin: 1px;
    transition: all 0.3s linear;
    width: 26px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
