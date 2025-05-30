import React, { ReactNode } from 'react';

import { Container } from '@chakra-ui/react';

interface IAppContainer {
  children: ReactNode;
}

const AppContainer = ({ children }: IAppContainer) => {
  return (
    <Container maxWidth="100%" p="0" bg="grey.100">
      {children}
    </Container>
  );
};

export default AppContainer;
