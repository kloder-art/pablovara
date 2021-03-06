import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Artwork from '../components/Artwork';
import Text from '../components/Text';

const StyledProjectPage = styled.article`
  display: inline-block;
  padding-right: 1rem;
  @media (max-width: 980px) {
    & {
      padding-right: 0;
    }
  }
`;

const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 2rem;
  grid-auto-flow: column;

  @media (max-width: 980px) {
    & {
      grid-auto-flow: row;
    }
  }
`;

const moveStrip = (ev) => {
  const d = ev.target.getBoundingClientRect().x - 250;
  window.scrollBy(d, 0);
};

const ProjectPage = ({
  data: {
    markdownRemark: { frontmatter, html },
  },
}) => {
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <StyledProjectPage>
        <StyledLayout>
          <Text title={frontmatter.title} html={html} />
          {frontmatter.artwork &&
            frontmatter.artwork.map((x, idx) => (
              <Artwork {...x} key={idx} onClick={moveStrip} />
            ))}
        </StyledLayout>
      </StyledProjectPage>
    </Layout>
  );
};

ProjectPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        artwork: PropTypes.arrayOf(
          PropTypes.shape({
            type: PropTypes.oneOf(['image', 'youtube', 'gif', 'space']),
            text: PropTypes.string,
            src: PropTypes.object,
            id: PropTypes.string,
          })
        ),
      }),
      html: PropTypes.string,
    }),
  }),
};

export default ProjectPage;

export const pageQuery = graphql`
  query($slug: String) {
    markdownRemark(
      frontmatter: { slug: { eq: $slug } }
      fileInfo: { sourceInstanceName: { eq: "projects" } }
    ) {
      frontmatter {
        slug
        title
        artwork {
          type
          text
          id
          len
          src {
            publicURL
            childImageSharp {
              original {
                src
              }
            }
          }
        }
      }
      html
    }
  }
`;
