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
      <Link to="/">
        <Image
          src="/logo.png"
          alt="Logo"
          h={{ base: '62px', sm: '62px' }}
        />
      </Link>

      <Spacer />

      <HStack spacing={4}>
        <Link to="/tutor-login">
          <Button
            textColor="grey.500"
            _hover={{ textColor: "grey.100", background: "blue.300" }}
            borderColor="grey.200"
            variant="outline"
            size="sm"
          >
            Tutor Login
          </Button>
        </Link>

        <Link to="/student-login">
          <Button
            textColor="grey.500"
            _hover={{ textColor: "grey.100", background: "green.300" }}
            borderColor="grey.200"
            variant="outline"
            size="sm"
          >
            Student Login
          </Button>
        </Link>

        {/* Triple bar dropdown menu */}
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