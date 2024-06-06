import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {IconButton, IconButtonProps, Tooltip} from '@mui/material';
import {ReactElement} from 'react';
type Props = IconButtonProps & {
  tooltipMessage?: string;
};

export const DeleteButton = ({
  tooltipMessage = 'Delete from cart',
  ...otherProps
}: Props): ReactElement => {
  return (
    <Tooltip title={tooltipMessage}>
      <IconButton {...otherProps}>
        <DeleteForeverIcon />
      </IconButton>
    </Tooltip>
  );
};
