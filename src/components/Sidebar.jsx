import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Contact from './Contact';

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
`;

const Sidebar = ({ title }) => {
  const { projects, pages } = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: { fileInfo: { sourceInstanceName: { eq: "projects" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              slug
            }
          }
        }
      }
      pages: allMarkdownRemark(
        filter: { fileInfo: { sourceInstanceName: { eq: "pages" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `);
  return (
    <StyledSidebar>
      <h1>
        <Link to={'/'}>{title}</Link>
      </h1>
      <nav>
        <h2>Proyectos</h2>
        <ul>
          {projects.edges.map(({ node: { frontmatter: { title, slug } } }) => (
            <li key={slug}>
              <Link to={`/${slug}`} activeClassName={'active'}>
                {title}
              </Link>
            </li>
          ))}
          <li className={'separator'}></li>
          {pages.edges.map(({ node: { frontmatter: { title, slug } } }) => (
            <li key={slug}>
              <Link to={`/${slug}`}>{title}</Link>
            </li>
          ))}
          <li className={'separator'}></li>
          <li>
            <Contact />
          </li>
        </ul>
      </nav>
    </StyledSidebar>
  );
};

Sidebar.propTypes = {
  title: PropTypes.string,
};

export default Sidebar;
