import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledGif = styled.div`
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

const Gif = ({ src, text, onClick }) => (
  <StyledGif onClick={onClick}>
    <img src={src && src.publicURL ? src.publicURL : null} />
    <div dangerouslySetInnerHTML={{ __html: text }} />
  </StyledGif>
);

Gif.propTypes = {
  src: PropTypes.object,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Gif;
