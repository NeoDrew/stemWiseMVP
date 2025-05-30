import React from 'react';
import {
    Box,
    Flex,
    Avatar,
    Text,
    VStack,
    Button,
    HStack,
    Badge,
    Spacer,
} from '@chakra-ui/react';
import { Tutor } from 'types/tutors';

interface TutorCardProps {
    tutor: Tutor;
}

const TutorCard: React.FC<TutorCardProps> = ({ tutor }) => {
    return (
        <Box
            bg="white"
            p={4}
            borderRadius="2xl"
            shadow="md"
            mb={4}
            _hover={{ shadow: 'lg' }}
            width="100%"
            position="relative"
        >
            {/* Top-right Badge */}
            {tutor.isDBSCertified && (
                <Badge
                    position="absolute"
                    top={4}
                    right={4}
                    backgroundColor="green.100"
                    textColor="green.400"
                    variant="solid"
                    borderRadius="full"
                    px={3}
                    py={1}
                >
                    DBS Certified
                </Badge>
            )}

            <Flex align="center">
                {/* Left: Avatar */}
                <Avatar name={tutor.name} src={tutor.imageUrl} size="xl" />

                {/* Middle: Info */}
                <VStack align="start" spacing={1} px={4} flex={1}>
                    <HStack w="100%">
                        <Text fontWeight="bold" fontSize="lg">
                            {tutor.name}
                        </Text>
                        <Text color="gray.600">£{tutor.rate}/hr</Text>
                    </HStack>
                    <Text fontSize="sm" color="blue.500" fontWeight="medium">
                        {tutor.profileHighlight}
                    </Text>
                    <Text fontSize="sm" color="gray.700" noOfLines={3}>
                        {tutor.bio}
                    </Text>
                </VStack>
            </Flex>

            {/* Bottom: Badges + Actions */}
            <Flex mt={4} direction={{ base: 'column', sm: 'row' }} align={{ base: 'start', sm: 'center' }}>
                <HStack spacing={2} mb={{ base: 2, sm: 0 }} pl={112}>
                    {tutor.badges?.map((badge, idx) => (
                        <Badge key={idx} variant='outline' colorScheme="purple" borderRadius="full" px={2}>
                            {badge}
                        </Badge>
                    ))}
                </HStack>
                <Spacer />
                <HStack spacing={2}>
                    <Button colorScheme="blue" size="sm">
                        View Profile
                    </Button>
                    <Button variant="ghost" size="sm">
                        Save
                    </Button>
                </HStack>
            </Flex>
        </Box>
    );
};

export default TutorCard;
