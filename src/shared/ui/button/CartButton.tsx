import LocalMallIcon from '@mui/icons-material/LocalMall';
import {IconButton, IconButtonProps} from '@mui/material';
import {ReactElement} from 'react';

type Props = IconButtonProps;

export const CartButton = (props: Props): ReactElement => {
  return (
    <IconButton aria-label="Cart" {...props}>
      <LocalMallIcon fontSize="inherit" />
    </IconButton>
  );
};
