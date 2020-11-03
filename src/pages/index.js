import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export const query = graphql`
  query {
    markdownRemark(frontmatter: { slug: { eq: "home" } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;

const StyledHome = styled.div`
  h1 {
    display: none;
    font-size: 1rem;
    line-height: 2rem;
    @media (max-width: 980px) {
      & {
        display: block;
      }
    }
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title={'Home'} />
    <StyledHome>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </StyledHome>
  </Layout>
);

export default IndexPage;
