import React from 'react';
import { Flex, Box, Text, VStack } from '@chakra-ui/react';
import FilterSidebar from 'pages/FindTutor/components/filterSidebar';
import Header from 'components/header';
import Footer from 'components/footer';
import TutorCard from './components/tutorCard';
import { sampleTutors } from 'types/tutors';

const FindTutor = () => {
    const tutors = [...sampleTutors];

    return (
        <Box>
            <Header />
            <Flex minHeight="calc(100vh - 65px)">
                <FilterSidebar />
                <Box flex="1" p={6}>
                    <VStack align="start" spacing={4}>
                        <Text fontSize="sm" color="gray.600" as={"b"}>
                            Showing {tutors.length} tutor{tutors.length !== 1 ? 's' : ''}, filtered by your needs.
                        </Text>

                        {tutors.map((tutor) => (
                            <TutorCard key={tutor.id} tutor={tutor} />
                        ))}
                    </VStack>
                </Box>
            </Flex>
            <Footer />
        </Box>
    );
};

export default FindTutor;