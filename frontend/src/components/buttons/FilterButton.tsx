import React, { MouseEventHandler } from 'react';

import { Button, Flex, Text } from '@chakra-ui/react';

interface IFilterButton {
  bgColor?: string;
  IconColor?: string;
  label: string;
  active?: boolean;
  onClick: MouseEventHandler;
}

const FilterButton = ({ active, label, onClick }: IFilterButton) => {
  return (
    <Button
      p="14px 18px"
      bgColor={active ? 'blue.300' : 'gray.400'}
      borderRadius="8px"
      height="30px"
      onClick={onClick}
      _hover={{ bgColor: active ? 'blue.300' : 'gray.500' }}
      data-testid={`${label}-update-button`}
    >
      <Flex>
        <Text textStyle="sP" color="white.100">
          {label}
        </Text>
      </Flex>
    </Button>
  );
};

export default FilterButton;
