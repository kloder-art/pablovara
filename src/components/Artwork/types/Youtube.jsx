import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledYoutube = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  width: 750px;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 980px) {
    & {
      width: 100%;
    }
  }
`;

const Youtube = ({ id, text }) => (
  <StyledYoutube>
    <iframe
      allowFullScreen={true}
      width={750}
      height={500}
      src={`https://www.youtube.com/embed/${id}?fs=1&amp;iv_load_policy=3&amp;showinfo=0&amp;rel=0&amp;cc_load_policy=0&amp;start=0&amp;end=0`}
    />
    <div dangerouslySetInnerHTML={{ __html: text }} />
  </StyledYoutube>
);

Youtube.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
};

export default Youtube;
