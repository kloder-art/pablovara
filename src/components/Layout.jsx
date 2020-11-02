import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Sidebar from './Sidebar';

import '../styles/global.scss';

const StyledContent = styled.div`
  margin: 40px 20px 20px 270px;

  @media (max-width: 980px) {
    & {
      margin: 40px 20px;
    }
  }
`;

const Layout = ({ children }) => {
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
      <Sidebar title={data.site.siteMetadata.title} />
      <StyledContent>{children}</StyledContent>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
