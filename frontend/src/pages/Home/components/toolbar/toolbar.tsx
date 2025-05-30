import React, { Dispatch, SetStateAction, useState } from 'react';

import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Text,
} from '@chakra-ui/react';

interface IToolBar {
  setDataFeed: Dispatch<SetStateAction<string>>;
}

const dataFeeds = [
  {
    id: '1',
    name: '360T',
  },
  {
    id: '2',
    name: 'Reuters',
  },
];

const ToolBar = ({ setDataFeed }: IToolBar) => {
  const date = new Date();
  const lastRefreshedTime = date.toTimeString().split(' ')[0];
  const [lastRefreshed] = useState(lastRefreshedTime);
  const [refreshIn] = useState<number>(10);

  return (
    <HStack
      bg="white.100"
      p="15px"
      mb="15px"
      borderRadius="10px"
      boxShadow={'0px 1px 1px var(--chakra-colors-gray-200)'}
    >
      <FormControl isRequired>
        <HStack>
          <FormLabel w="30%">Last Refreshed</FormLabel>
          <Box w="150px" bg="white.300" p="8px" pl="10px" borderRadius="8px">
            <Text textStyle="p">{lastRefreshed}</Text>
          </Box>
        </HStack>
      </FormControl>

      <FormControl isRequired>
        <HStack>
          <FormLabel w="30%">Refresh In</FormLabel>
          <Box w="150px" bg="white.300" p="8px" pl="10px" borderRadius="8px">
            <Text textStyle="p">{refreshIn}</Text>
          </Box>
        </HStack>
      </FormControl>

      <FormControl isRequired>
        <HStack>
          <FormLabel w="30%">Data Feed</FormLabel>
          <Select
            data-testid="feed-select"
            onChange={(e) => setDataFeed(e.target.value)}
            width="150px"
          >
            {dataFeeds?.map((dataFeed) => (
              <option key={dataFeed.id} value={dataFeed.id}>
                {dataFeed.name}
              </option>
            ))}
          </Select>
        </HStack>
      </FormControl>

      <FormControl isRequired>
        <HStack>
          <FormLabel w="30%">Refresh Interval</FormLabel>
          <NumberInput defaultValue={5} min={1} max={60} width="150px">
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </HStack>
      </FormControl>
    </HStack>
  );
};

export default ToolBar;
