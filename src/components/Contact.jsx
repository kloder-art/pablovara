import React from 'react';
import { FiInstagram, FiMail, FiYoutube } from 'react-icons/fi';
import styled from 'styled-components';

const StyledContact = styled.ul`
  list-sytile: none;
  li {
    a {
      display: grid;
      grid-template-columns: 1rem 1fr;
      align-items: center;
    }
  }
`;

const Contact = () => (
  <StyledContact>
    <li>
      <a href={'mailto:pablovarafoto@gmail.com'}>
        <FiMail />
        pablovarafoto@gmail.com
      </a>
    </li>
    <li>
      <a
        href={'https://www.instagram.com/pablovarafoto/'}
        target={'_blank'}
        rel={'noreferrer noopener'}
      >
        <FiInstagram />
        pablovarafoto
      </a>
    </li>
    <li>
      <a
        href={'https://www.youtube.com/user/pablovarafoto'}
        target={'_blank'}
        rel={'noreferrer noopener'}
      >
        <FiYoutube />
        pablovarafoto
      </a>
    </li>
  </StyledContact>
);

export default Contact;
