import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Artwork from '../components/Artwork';

const StyledProjectPage = styled.article``;

const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 2rem;
  grid-auto-flow: column;

  @media (max-width: 600px) {
    & {
      grid-auto-flow: row;
    }
  }
`;

const StyledText = styled.div`
  white-space: normal;
  width: 33vw;
  height: 89vh;

  overflow: hidden;
  overflow-y: auto;

  @media (max-width: 600px) {
    & {
      padding-bottom: 4rem;
      min-width: inherit;
      height: auto;
    }
  }
`;

const ProjectPage = ({
  data: {
    markdownRemark: { frontmatter, html },
  },
}) => (
  <Layout>
    <SEO title={frontmatter.title} />
    <StyledProjectPage>
      <StyledLayout>
        <StyledText>
          <h2>{frontmatter.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </StyledText>
        {frontmatter.artwork &&
          frontmatter.artwork.map((x, idx) => <Artwork {...x} key={idx} />)}
        <div>&nbsp;</div>
      </StyledLayout>
    </StyledProjectPage>
  </Layout>
);

ProjectPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        artwork: PropTypes.arrayOf(
          PropTypes.shape({
            type: PropTypes.oneOf(['image', 'youtube', 'gif']),
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
