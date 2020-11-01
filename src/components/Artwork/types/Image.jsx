import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImage = styled.div`
  img {
    max-height: 80vh;
  }
`;

export const Image = ({ src, text }) => (
  <StyledImage>
    <img
      src={src && src.childImageSharp ? src.childImageSharp.original.src : null}
    />
    <div dangerouslySetInnerHTML={{ __html: text }} />
  </StyledImage>
);

Image.propTypes = {
  src: PropTypes.object,
};
