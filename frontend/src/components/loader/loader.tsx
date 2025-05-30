import React from 'react';

import { ResponsiveValue, Spinner } from '@chakra-ui/react';

interface ILoader {
  size?: ResponsiveValue<string>;
}

const Loader = ({ size = 'xl' }: ILoader) => {
  return (
    <Spinner
      thickness={size === 'xl' ? '4px' : '2px'}
      speed="0.65s"
      emptyColor="blue.100"
      color="blue.300"
      size={size}
      data-testid="loading-spinner"
    />
  );
};

export default Loader;
