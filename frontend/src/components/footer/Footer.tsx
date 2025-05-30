import React from 'react';
import {
    Box,
    Flex,
    Text,
    Link,
    Stack,
    Divider,
    Icon,
} from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <Box bg="gray.100" color="gray.700" py={8} px={{ base: 4, md: 12 }} borderTopWidth={1} borderColor="gray.200">
            <Flex
                direction={{ base: 'column', md: 'row' }}
                justify="space-between"
                align={{ base: 'flex-start', md: 'center' }}
                mb={4}
            >
                <Stack spacing={2}>
                    <Text fontWeight="bold" fontSize="lg">
                        Contact Us
                    </Text>
                    <Flex align="center">
                        <PhoneIcon mr={2} /> <Text>+1 (800) 555-1234</Text>
                    </Flex>
                    <Flex align="center">
                        <EmailIcon mr={2} /> <Text>support@tutorfinder.com</Text>
                    </Flex>
                    <Flex align="center">
                        <Text visibility="hidden">asdf</Text>
                    </Flex>
                </Stack>

                <Stack spacing={2}>
                    <Text fontWeight="bold" fontSize="lg">
                        Quick Links
                    </Text>
                    <Link href="/about">About Us</Link>
                    <Link href="/pricing">Pricing</Link>
                    <Link href="/contact">Contact</Link>
                </Stack>

                <Stack spacing={2}>
                    <Text fontWeight="bold" fontSize="lg">
                        Follow Us
                    </Text>
                    <Flex gap={3}>
                        <Link href="https://facebook.com" isExternal><Icon as={FaFacebook} boxSize={5} /></Link>
                        <Link href="https://twitter.com" isExternal><Icon as={FaTwitter} boxSize={5} /></Link>
                        <Link href="https://instagram.com" isExternal><Icon as={FaInstagram} boxSize={5} /></Link>
                    </Flex>
                    <Flex align="center">
                        <Text visibility="hidden">asdf</Text>
                    </Flex>
                    <Flex align="center">
                        <Text visibility="hidden">asdf</Text>
                    </Flex>
                </Stack>
            </Flex>

            <Divider my={4} />

            <Text textAlign="center" fontSize="sm">
                © {new Date().getFullYear()} Stem Wise. All rights reserved.
            </Text>
        </Box>
    );
};

export default Footer;
