import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import img from '../images/home.jpg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <img src={img} />
  </Layout>
);

export default IndexPage;
