import React from 'react';
import { IconType } from 'react-icons';

import {
  ComponentWithAs,
  Icon,
  IconProps,
  Text,
  VStack,
} from '@chakra-ui/react';

interface ISidePanelTab {
  active: boolean;
  text: string;
  onClick?: () => void;
  icon?: ComponentWithAs<'svg', IconProps> | IconType;
}

const SidePanelTab = ({ active, text, onClick, icon }: ISidePanelTab) => {
  return (
    <VStack
      borderTopRightRadius="8px"
      borderBottomRightRadius="8px"
      padding="12px"
      cursor="pointer"
      bg={active ? 'blue.300' : 'transparent'}
      onClick={onClick}
    >
      {icon && (
        <Icon
          as={icon}
          width={{ base: '20px', md: '24px' }}
          height={{ base: '20px', md: '24px' }}
          color="white.100"
        />
      )}

      <Text
        textStyle="p"
        color="white.100"
        fontWeight={active ? 'bold' : 'regular'}
      >
        {text}
      </Text>
    </VStack>
  );
};

export default SidePanelTab;
