import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImage = styled.div`
  cursor: pointer;
  img {
    max-height: 80vh;
  }

  @media (max-width: 980px) {
    & {
      align-self: center;
      justify-self: center;
      img {
        max-width: 100%;
      }
    }
  }
`;

const Image = ({ src, text, onClick }) => (
  <StyledImage onClick={onClick}>
    <img
      src={src && src.childImageSharp ? src.childImageSharp.original.src : null}
    />
    <div dangerouslySetInnerHTML={{ __html: text }} />
  </StyledImage>
);

Image.propTypes = {
  src: PropTypes.object,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Image;
