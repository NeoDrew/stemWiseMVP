import React, { useEffect } from 'react';
import { BiErrorCircle } from 'react-icons/bi';

import { Box, Flex, Text, useToast } from '@chakra-ui/react';

interface IErrorToast {
  message: string;
  display: boolean;
  position?:
    | 'top'
    | 'top-right'
    | 'top-left'
    | 'bottom'
    | 'bottom-right'
    | 'bottom-left';
  top?: string | object;
  right?: string | object;
  bottom?: string | object;
  left?: string | object;
  duration?: number;
}

const ErrorToast = ({
  message,
  display,
  position = 'top',
  top,
  right,
  bottom,
  left,
  duration = 2000,
}: IErrorToast) => {
  const toast = useToast();
  const toastId = `success-toast-${message}-${Math.random()}`;

  useEffect(() => {
    if (display && !toast.isActive(toastId)) {
      toast({
        id: toastId,
        position: position,
        duration: duration,
        render: () => (
          <Box
            bg="red.500"
            boxShadow="0px 1px 10px 0px #00000030"
            padding="14px"
            borderRadius="10px"
            position="fixed"
            top={position.includes('top') ? top || '20px' : undefined}
            bottom={position.includes('bottom') ? bottom || '20px' : undefined}
            right={position.includes('right') ? right || '20px' : undefined}
            left={position.includes('left') ? left || '20px' : undefined}
            zIndex="9999"
          >
            <Flex>
              <BiErrorCircle color="white.100" height="16px" />
              <Text textStyle="xsP" color="white.100">
                {message}
              </Text>
            </Flex>
          </Box>
        ),
      });
    }
  }, [display]);

  return null;
};

export default ErrorToast;
