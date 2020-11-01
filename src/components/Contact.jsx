import React from 'react';
import { FiInstagram, FiMail, FiYoutube } from 'react-icons/fi';
import styled from 'styled-components';

const StyledContact = styled.ul`
  align-self: end;
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
      <a
        href={'mailto:pablovarafoto@gmail.com'}
        target={'_blank'}
        rel={'noreferrer noopener'}
      >
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
        Instagram
      </a>
    </li>
    <li>
      <a
        href={'https://www.youtube.com/user/pablovarafoto'}
        target={'_blank'}
        rel={'noreferrer noopener'}
      >
        <FiYoutube />
        Youtube
      </a>
    </li>
  </StyledContact>
);

export default Contact;
