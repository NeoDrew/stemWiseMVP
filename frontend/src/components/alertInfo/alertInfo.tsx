import React from 'react';

import {
  Alert,
  AlertDescription,
  AlertIcon,
  CloseButton,
  ListItem,
  UnorderedList,
  useDisclosure,
} from '@chakra-ui/react';

interface IAlertInfo {
  text: string;
  width?: string;
  theme?: 'error' | 'warning';
}

const AlertInfo = ({ text, width = '400px', theme = 'error' }: IAlertInfo) => {
  const { isOpen: isVisible, onClose } = useDisclosure({ defaultIsOpen: true });

  return isVisible ? (
    <Alert
      status="error"
      borderRadius="8px"
      mb="14px"
      width={{ sm: width }}
      bgColor={theme === 'error' ? '#FCEBED' : 'orange.100'}
    >
      <AlertIcon color={theme === 'error' ? '#E84A58' : 'orange.200'} />
      <AlertDescription fontSize="sm" color="blue.400">
        Error:
        <UnorderedList>
          <ListItem> {text.replace('Error: ', '')}</ListItem>
        </UnorderedList>
      </AlertDescription>
      <CloseButton
        alignSelf="flex-start"
        position="relative"
        right={-1}
        top={-1}
        onClick={onClose}
      />
    </Alert>
  ) : (
    <></>
  );
};

export default AlertInfo;
