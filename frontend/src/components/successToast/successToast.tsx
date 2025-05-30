import React, { useEffect } from 'react';

import { BiCheck } from "react-icons/bi";
import { Box, Flex, Text, useToast } from '@chakra-ui/react';

interface ISuccessToast {
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

const SuccessToast = ({
  message,
  display,
  position = 'top',
  top,
  right,
  bottom,
  left,
  duration = 2000,
}: ISuccessToast) => {
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
            bg="#57cc99"
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
            <Flex align="center">
              <Box mr="8px">
                <BiCheck color="white.100" width="16px" height="16px" />
              </Box>
              <Text color="white.100">{message}</Text>
            </Flex>
          </Box>
        ),
      });
    }
  }, [display]);

  return null;
};

export default SuccessToast;
