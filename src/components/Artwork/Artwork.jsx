import React from 'react';

import typeMap from './types';

const Artwork = ({ type, ...rest }) => {
  const Cmp = typeMap[type];
  return <Cmp {...rest} />;
};

export default Artwork;
