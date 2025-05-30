import React from 'react';

import { Text } from '@chakra-ui/react';

import BaseButton, { IBaseButton } from './BaseButton';

interface IPrimaryButton extends Omit<IBaseButton, 'children'> {
  text: string;
}

const PrimaryButton = (props: IPrimaryButton) => {
  return (
    <BaseButton {...props}>
      <Text>{props.text}</Text>
    </BaseButton>
  );
};

export default PrimaryButton;
