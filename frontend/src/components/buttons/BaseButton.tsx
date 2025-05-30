import React from 'react';

import { Button, ButtonProps } from '@chakra-ui/react';

import buttonColors from 'theme/buttonColors';

export interface IBaseButton extends ButtonProps {
  align?: 'center' | 'right';
  color?: string;
  icon?: ButtonProps['rightIcon'];
  size?: 'sm' | 'md';
  theme?: 'blue' | 'green' | 'red' | 'grey';
}

const BaseButton = ({
  align = 'center',
  children,
  color,
  disabled,
  icon,
  onClick,
  size = 'md',
  theme = 'blue',
  ...rest
}: IBaseButton) => {
  return (
    <Button
      {...rest}
      bgColor={disabled ? '#c3c5c9' : buttonColors[theme]?.[0]}
      borderRadius={size === 'md' ? '8px' : '4px'}
      color={color ? color : 'white.100'}
      cursor={disabled ? 'not-allowed' : 'pointer'}
      disabled={disabled}
      height="auto"
      justifyContent={align === 'right' ? 'flex-end' : 'center'}
      onClick={onClick}
      fontSize={size === 'md' ? '14px' : '12px'}
      paddingBlock={size === 'md' ? '8px' : '3px'}
      paddingRight={size === 'md' ? '16px' : '12px'}
      paddingLeft={
        icon
          ? size === 'md'
            ? '20px'
            : '16px'
          : size === 'md'
            ? '16px'
            : '12px'
      }
      position="relative"
      leftIcon={icon}
      textStyle="p"
      _active={{ bgColor: disabled ? '#c3c5c9' : buttonColors[theme]?.[1] }}
      _focus={{ bgColor: disabled ? '#c3c5c9' : buttonColors[theme]?.[1] }}
      _hover={{ bgColor: disabled ? '#c3c5c9' : buttonColors[theme]?.[1] }}
    >
      {children}
    </Button>
  );
};

export default BaseButton;
