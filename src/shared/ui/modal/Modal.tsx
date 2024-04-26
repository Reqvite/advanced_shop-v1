import {Box, Dialog} from '@mui/material';
import Stack from '@mui/material/Stack';
import {MouseEventHandler, ReactElement} from 'react';
import {useAppDispatch, useAppSelector} from '@/shared/lib/hooks';
import {actions as modalActions, selectModalContent, selectShowModal} from '@/slices/modal';
import {CloseButton} from '../button/CloseButton';
import {Logo} from '../logo/Logo';
import {modalStyles} from './styles/styles';

export const Modal = (): ReactElement => {
  const dispatch = useAppDispatch();
  const content = useAppSelector(selectModalContent);
  const isOpen = useAppSelector(selectShowModal);
  const onCloseModal = (): void => {
    dispatch(modalActions.closeModal());
  };

  return (
    <Dialog fullWidth maxWidth="md" open={isOpen} onClose={onCloseModal}>
      <Box sx={modalStyles.logo}>
        <Logo />
      </Box>
      <CloseButton
        sx={modalStyles.closeButton}
        onClick={onCloseModal as MouseEventHandler<HTMLButtonElement>}
      />
      <Box sx={modalStyles.modal}>
        <Stack mt={3} />
        {content && content}
      </Box>
    </Dialog>
  );
};
