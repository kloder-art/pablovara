import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledGif = styled.div``;

export const Gif = ({ src, text }) => (
  <StyledGif>
    <img src={src && src.publicURL ? src.publicURL : null} />
    <div dangerouslySetInnerHTML={{ __html: text }} />
  </StyledGif>
);

Gif.propTypes = {
  src: PropTypes.object,
  text: PropTypes.string,
};
