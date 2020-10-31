import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export const query = graphql`
  query {
    markdownRemark(frontmatter: { slug: { eq: "biocv" } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;

const BiocvPage = ({ data }) => (
  <Layout>
    <SEO title="Bio/CV" />
    <h2>{data.markdownRemark.frontmatter.title}</h2>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  </Layout>
);

export default BiocvPage;
