import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const Menu = () => {
  const { projects, pages } = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: { fileInfo: { sourceInstanceName: { eq: "projects" } } }
        sort: { fields: frontmatter___order, order: ASC }
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
        {pages.edges
          .filter((x) => x.node.frontmatter.slug !== 'home')
          .map(({ node: { frontmatter: { title, slug } } }) => (
            <li key={slug}>
              <Link to={`/${slug}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Menu;
