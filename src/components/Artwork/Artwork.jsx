import React from 'react';

import * as types from './types';

const typeMap = {
  youtube: types.Youtube,
  image: types.Image,
  gif: types.Gif,
};

const Artwork = ({ type, ...rest }) => {
  const Cmp = typeMap[type];
  return <Cmp {...rest} />;
};

export default Artwork;
