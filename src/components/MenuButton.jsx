import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMenuButton = styled.div`
  position: fixed;
  z-index: 20;
  top: 0.5rem;
  right: 1rem;
  display: none;
  cursor: pointer;

  @media (max-width: 980px) {
    & {
      display: inline-block;
    }
  }

  .bar1,
  .bar2,
  .bar3 {
    width: 35px;
    height: 5px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
  }

  ${({ active }) =>
    active &&
    `
    .bar1 {
      transform: rotate(-45deg) translate(-9px, 6px);
    }
    .bar2 {
      opacity: 0;
    }
    .bar3 {
      transform: rotate(45deg) translate(-8px, -8px);
    }

    .bar1, .bar3 {
      background-color: white;
    }
  `}
`;

const MenuButton = ({ active, onClick }) => (
  <StyledMenuButton active={active} onClick={onClick}>
    <div className="bar1"></div>
    <div className="bar2"></div>
    <div className="bar3"></div>
  </StyledMenuButton>
);

MenuButton.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default MenuButton;
