import {Dialog, DialogProps} from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {ReactElement, ReactNode} from 'react';
import {ModalStyled} from './styles/styles';

type Props = DialogProps & {
  children: ReactNode;
  title?: string;
};
export const Modal = ({title, children, ...otherProps}: Props): ReactElement => {
  return (
    <Dialog {...otherProps}>
      <ModalStyled>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{mb: 2}}>
          {title && (
            <Typography component="h1" variant="h5">
              {title}
            </Typography>
          )}
        </Stack>
        {children && <div>{children}</div>}
      </ModalStyled>
    </Dialog>
  );
};
