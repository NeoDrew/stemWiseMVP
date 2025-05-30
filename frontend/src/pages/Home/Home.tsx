import React from 'react';
import { BiSearch } from 'react-icons/bi';

import {
  Box,
  Text,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  Flex,
} from '@chakra-ui/react';

import AppContainer from 'components/appContainer';
import Header from 'components/header';

const Home = () => {
  return (
    <AppContainer>
      <Box minHeight="100vh">
        <Box shadow="xl"><Header /></Box>

        <Box
          height="calc(100vh - 65px)"
          bgImage="url('/tutoringBackground.jpg')"
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          position="relative"
        >
          <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            bg="rgba(0, 0, 0, 0.5)"
            zIndex={0}
          />

          {/* Centered content */}
          <Flex
            position="relative"
            zIndex={1}
            height="100%"
            align="center"
            justify="center"
            px={4}
          >
            <VStack spacing={6} maxW="600px" w="100%" color="white" textAlign="center">
              <Text fontSize={{ base: '3xl', md: '5xl' }} fontWeight="bold">
                Find Your Perfect Tutor
              </Text>
              <Text fontSize={{ base: 'md', md: 'lg' }}>
                Qualified tutors across subjects, levels and learning experience. Tailored learning starts here.
              </Text>
              <InputGroup maxW="500px" w="100%">
                <InputLeftElement
                  pointerEvents="none"
                  children={<Icon as={BiSearch} color="gray.400" />}
                />
                <Input
                  type="text"
                  placeholder="Search by subject, grade, or location"
                  bg="white"
                  color="black"
                  _placeholder={{ color: 'gray.500' }}
                  borderRadius="md"
                  shadow="sm"
                />
              </InputGroup>
            </VStack>
          </Flex>
        </Box>
      </Box>


      <Box
        height="calc(100vh - 65px)"
        backgroundColor="grey.100"
        position="relative"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          zIndex={0}
        />

      </Box>
    </AppContainer>
  );
};

export default Home;
