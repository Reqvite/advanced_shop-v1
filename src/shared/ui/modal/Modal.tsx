import {Box, Dialog} from '@mui/material';
import Stack from '@mui/material/Stack';
import {MouseEventHandler, ReactElement} from 'react';
import {modalStyles} from '@/app/theme/styles';
import {useAppDispatch, useAppSelector} from '@/shared/lib/hooks';
import {actions as modalActions, selectModalContent, selectShowModal} from '@/slices/modal';
import {CloseButton} from '../button/CloseButton';
import {Logo} from '../logo/Logo';

export const Modal = (): ReactElement => {
  const dispatch = useAppDispatch();
  const content = useAppSelector(selectModalContent);
  const {maxWidth = 'md'} = content?.props || {};
  const isOpen = useAppSelector(selectShowModal);
  const onCloseModal = (): void => {
    dispatch(modalActions.closeModal());
  };

  return (
    <Dialog data-testid="modal" fullWidth maxWidth={maxWidth} open={isOpen} onClose={onCloseModal}>
      <Box sx={modalStyles.logo}>
        <Logo />
      </Box>
      <CloseButton
        sx={modalStyles.closeButton}
        onClick={onCloseModal as MouseEventHandler<HTMLButtonElement>}
      />
      <Box sx={modalStyles.modal}>
        <Stack mt={3} />
        {content?.children && content.children}
      </Box>
    </Dialog>
  );
};
