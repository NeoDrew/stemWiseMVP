import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const PsychometricTest = () => {
    return (
        <Box
            roundedTop="xl"
            position="relative"
            bgImage="url('/psychometricTest.jpg')"
            bgSize="cover"
            bgPosition="center"
            py={20}
            px={6}
        >
            {/* Overlay */}
            <Box

                position="absolute"
                roundedTop="xl"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="blackAlpha.600"
                zIndex={0}
            />

            <Box
                position="relative"
                zIndex={1}
                maxW="lg"
                mx="auto"
                p={8}
                bg="white"
                borderRadius="xl"
                textAlign="center"
                shadow="lg"
            >
                <Box
                    position="absolute"
                    top={2}
                    right={4}
                    fontWeight="bold"
                    fontSize="xl"
                    bgGradient="linear(to-r, teal.400, blue.500)"
                    bgClip="text"
                >
                    AI
                </Box>

                <Heading size="md" mb={3} color="blue.800">
                    Try our AI-powered psychometric test
                </Heading>
                <Text fontSize="sm" mb={4} color="gray.600">
                    Discover how you learn best - take just a few minutes to get personalized recommendations.
                </Text>
                <a href="/learning-style-test">
                    <Box
                        as="button"
                        px={6}
                        py={3}
                        bgGradient="linear(to-r, teal.400, blue.500)"
                        color="white"
                        fontWeight="bold"
                        borderRadius="md"
                        _hover={{ bgGradient: "linear(to-r, teal.600, blue.700)" }}
                    >
                        Take the Test
                    </Box>
                </a>
            </Box>
        </Box>
    );
};

export default PsychometricTest;