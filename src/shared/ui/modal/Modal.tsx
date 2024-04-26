import {Box, Dialog, DialogProps} from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {MouseEventHandler, ReactElement, ReactNode} from 'react';
import {CloseButton} from '../button/CloseButton';
import {Logo} from '../logo/Logo';
import {modalStyles} from './styles/styles';

type Props = DialogProps & {
  children: ReactNode;
  title?: string;
};
export const Modal = ({title, children, onClose, ...otherProps}: Props): ReactElement => {
  return (
    <Dialog fullWidth maxWidth="md" onClose={onClose} {...otherProps}>
      <Box sx={modalStyles.logo}>
        <Logo />
      </Box>
      <CloseButton
        sx={modalStyles.closeButton}
        onClick={onClose as MouseEventHandler<HTMLButtonElement>}
      />
      <Box sx={modalStyles.modal}>
        <Stack direction="row" justifyContent="center" alignItems="center" sx={{mt: 3}}>
          {title && (
            <Typography component="h1" variant="h5">
              {title}
            </Typography>
          )}
        </Stack>
        {children && <div>{children}</div>}
      </Box>
    </Dialog>
  );
};
