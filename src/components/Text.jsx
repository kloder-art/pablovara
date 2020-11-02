import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Social from './Social';

const StyledText = styled.div`
  white-space: normal;
  width: 33vw;
  height: 89vh;

  .content {
    padding-right: 1rem;
    overflow: hidden;
    overflow-y: auto;
    height: 100%;
  }

  @media (max-width: 980px) {
    & {
      width: auto;
      height: auto;

      .content {
        padding-right: 0;
      }
    }
  }
`;

const Text = ({ title, html }) => (
  <StyledText>
    <h2>{title}</h2>
    <Social />
    <div className={'content'} dangerouslySetInnerHTML={{ __html: html }} />
  </StyledText>
);

Text.propTypes = {
  title: PropTypes.string,
  html: PropTypes.string,
};

export default Text;
