import CloseIcon from '@mui/icons-material/Close';
import {IconButton, IconButtonProps, Tooltip} from '@mui/material';
import {ReactElement} from 'react';
type Props = IconButtonProps & {
  tooltipMessage?: string;
};

export const DeleteFromCartButton = ({
  tooltipMessage = 'Delete from cart',
  ...otherProps
}: Props): ReactElement => {
  return (
    <Tooltip title={tooltipMessage}>
      <IconButton {...otherProps}>
        <CloseIcon />
      </IconButton>
    </Tooltip>
  );
};
