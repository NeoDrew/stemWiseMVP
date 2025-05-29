import React from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';

import Home from 'pages/Home';

import theme from 'theme';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider
        router={createBrowserRouter(
          createRoutesFromElements(
            <>
              <Route path="/Home" element={<Home />} />
              <Route path="*" element={<Home />} />
            </>,
          ),
          { basename: '/' },
        )}
      />
    </ChakraProvider>
  );
};

export default App;
