import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSpace = styled.div`
  display: block;
  ${({ len }) => `width: ${len}px;`}
  height: 100%;

  @media (max-width: 980px) {
    & {
      ${({ len }) => `height: ${len}px;`}
      width: 100%;
    }
  }
`;

const Space = ({ len }) => <StyledSpace len={len} />;

Space.propTypes = {
  len: PropTypes.number,
};

export default Space;
