import React from 'react';
import {
    Box,
    Flex,
    Image,
    Heading,
    Text,
    Stack,
} from '@chakra-ui/react';

const TutoringProcessSection = () => {
    return (
        <Box bg="white.100" py={{ base: 10, md: 20 }} px={{ base: 4, md: 12 }}>
            <Flex
                direction={{ base: 'column', md: 'row' }}
                align="center"
                justify="center"
                gap={10}
            >
                {/* Left: Image */}
                <Box flex="1" maxW="500px">
                    <Image
                        src="/tutoringProcessSelection.jpg"
                        alt="Student being tutored"
                        borderRadius="lg"
                        shadow="md"
                        width="100%"
                        height="auto"
                        objectFit="cover"
                    />
                </Box>

                {/* Right: Text content */}
                <Box flex="1">
                    <Stack spacing={5}>
                        <Heading size="lg">How Stem Wise Works</Heading>
                        <Text fontSize="md" color="gray.700">
                            Our platform connects students with qualified tutors based on subject, grade level, and availability. You can search, compare, and book sessions - all in one place.
                        </Text>
                        <Text fontSize="md" color="gray.700">
                            Whether it's exam prep, homework help, or skill-building, our tailored approach ensures each student gets the support they need to thrive.
                        </Text>
                    </Stack>
                </Box>
            </Flex>
        </Box>
    );
};

export default TutoringProcessSection;