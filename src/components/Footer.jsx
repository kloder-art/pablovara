import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledFooter = styled.div`
  color: #999;
  background-color: rgba(255, 255, 255, 0.8);
`;

const Footer = () => (
  <StyledFooter>
    Contenido y fotografía por
    <br />
    <Link to={'/biocv'}>Pablo Vara</Link> © {new Date().getFullYear()}
  </StyledFooter>
);

export default Footer;
