import React, { useRef } from 'react';

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Flex,
  Text,
} from '@chakra-ui/react';

import PrimaryButton from 'components/buttons/PrimaryButton';

interface IDeleteAlertDialog {
  isLoading: boolean;
  isOpen: boolean;
  onClose: () => void;
  proceedDelete: () => void;
  name: string;
}

const DeleteAlertDialog = ({
  isLoading: isLoading,
  isOpen: isOpen,
  onClose: onClose,
  proceedDelete: proceedDelete,
  name: name,
}: IDeleteAlertDialog) => {
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader
            fontSize="lg"
            fontWeight="bold"
            background="blue.400"
            color="white"
            borderTopRadius="md"
          >
            <Flex align="center">
              <Text>Delete Confirmation</Text>
            </Flex>
          </AlertDialogHeader>

          <AlertDialogBody pt={4}>
            Are you sure you want to delete {name}? This action is cannot
            undone.
          </AlertDialogBody>

          <AlertDialogFooter>
            <PrimaryButton
              tabIndex={0}
              text="Delete"
              theme="red"
              size="sm"
              onClick={isLoading ? undefined : () => proceedDelete()}
            />

            <PrimaryButton
              tabIndex={1}
              text="Cancel"
              theme="grey"
              size="sm"
              onClick={isLoading ? undefined : () => onClose()}
              ml={3}
            />
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default DeleteAlertDialog;
