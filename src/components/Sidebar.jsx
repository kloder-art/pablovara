import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Menu from './Menu';
import Contact from './Contact';
import Footer from './Footer';

const StyledSidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  bottom: 0;
  padding: 40px 29px 0;
  background-color: rgba(255, 255, 255, 0.9);

  @media (max-width: 600px) {
    & {
      display: none;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      padding: 0;
      margin: 0;
      line-height: 1.2rem;

      &.separator {
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        margin: 0.5rem 0 2rem;
      }

      a.active {
        font-weight: bold;
      }
    }
  }

  display: grid;
  grid-gap: 2rem;
  grid-template-rows: 1rem auto auto 3rem;
`;

const Sidebar = ({ title }) => {
  return (
    <StyledSidebar>
      <h1>
        <Link to={'/'}>{title}</Link>
      </h1>
      <Menu />
      <Contact />
      <Footer />
    </StyledSidebar>
  );
};

Sidebar.propTypes = {
  title: PropTypes.string,
};

export default Sidebar;
