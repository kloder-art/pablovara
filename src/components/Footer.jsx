import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem 25px;
  color: #999;
  background-color: rgba(255, 255, 255, 0.8);
`;

const Footer = () => (
  <StyledFooter>
    Content & Photography by <Link to={'/contact'}>Pablo Vara</Link> ©{' '}
    {new Date().getFullYear()}
  </StyledFooter>
);

export default Footer;
