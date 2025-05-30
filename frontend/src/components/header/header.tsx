import React from 'react';
import { Link } from 'react-router-dom';
import {
  Flex,
  Image,
  Spacer,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Header = () => {
  return (
    <Flex
      as="header"
      h="65px"
      px={6}
      bg="white.100"
      align="center"
      boxShadow="sm"
    >
      {/* Logo */}
      <Link to="/">
        <Image
          src="/logo.png"
          alt="Logo"
          h={{ base: '62px', sm: '62px' }}
        />
      </Link>

      <Spacer />

      <HStack spacing={4} align="center">
        {/* Study Tools Nav Links */}
        <Link to="/study-notes">
          <Button variant="ghost" size="sm">Study Notes</Button>
        </Link>
        <Link to="/revision-questions">
          <Button variant="ghost" size="sm">Revision Questions</Button>
        </Link>
        <Link to="/study-tools">
          <Button variant="ghost" size="sm">Study Tools</Button>
        </Link>

        {/* Distinct "Find a Tutor" */}
        <Link to="/tutors">
          <Button
            colorScheme="blue"
            size="sm"
            fontWeight="bold"
            px={4}
          >
            Find a Tutor
          </Button>
        </Link>

        {/* Login Dropdown Menu */}
        <Menu>
          <MenuButton
            as={Button}
            variant="outline"
            size="sm"
            borderColor="grey.200"
          >
            Login
          </MenuButton>
          <MenuList>
            <MenuItem as={Link} to="/student-login">Student Login</MenuItem>
            <MenuItem as={Link} to="/tutor-login">Tutor Login</MenuItem>
          </MenuList>
        </Menu>

        {/* Triple-bar Dropdown */}
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            size="sm"
            borderColor="grey.200"
          />
          <MenuList>
            <MenuItem as={Link} to="/about">About</MenuItem>
            <MenuItem as={Link} to="/contact">Contact Us</MenuItem>
            <MenuItem as={Link} to="/pricing">Pricing</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
};

export default Header;
