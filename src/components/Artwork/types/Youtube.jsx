import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledYoutube = styled.div``;

export const Youtube = ({ id, text }) => (
  <StyledYoutube>
    <iframe
      allowFullscreen={true}
      width={750}
      height={500}
      src={`https://www.youtube.com/embed/${id}?fs=1&amp;iv_load_policy=3&amp;showinfo=0&amp;rel=0&amp;cc_load_policy=0&amp;start=0&amp;end=0`}
    />
    <div dangerouslySetInnerHTML={{ __html: text }} />
  </StyledYoutube>
);

Youtube.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string
};
