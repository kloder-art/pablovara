import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Sidebar from './Sidebar';
import MenuButton from './MenuButton';

import '../styles/global.scss';

const StyledContent = styled.div`
  margin: 40px 20px 20px 270px;

  @media (max-width: 980px) {
    & {
      margin: 1rem 1rem;
    }
  }
`;

const Layout = ({ children }) => {
  const [menu, setMenu] = useState(false);
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Sidebar
        title={data.site.siteMetadata.title}
        onMouseUp={() => setMenu(!menu)}
        active={menu}
      />
      <MenuButton active={menu} onClick={() => setMenu(!menu)} />
      <StyledContent>{children}</StyledContent>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
