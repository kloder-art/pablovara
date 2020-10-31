import React from 'react';
import { FaInstagram } from 'react-icons/fa';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const ContactoPage = () => (
  <Layout>
    <SEO title="Contacto" />
    <h2>Contacto</h2>
    <p>
      Puedes escribirme al email:{' '}
      <a href={'mailto:pablovarafoto@gmail.com'}>pablovarafoto@gmail.com</a>.
    </p>
    <h3>Redes Sociales</h3>
    <p>
      <a
        href={'https://www.instagram.com/pablovarafoto/'}
        target={'_blank'}
        rel={'noreferrer noopener'}
      >
        <FaInstagram /> pablovarafoto
      </a>
    </p>
  </Layout>
);

export default ContactoPage;
