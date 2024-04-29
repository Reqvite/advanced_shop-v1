import CloseIcon from '@mui/icons-material/Close';
import {IconButton, IconButtonProps} from '@mui/material';
import {ReactElement} from 'react';

type Props = IconButtonProps;

const styles = {
  position: 'absolute',
  right: 8,
  top: 8
};

export const CloseButton = ({...otherProps}: Props): ReactElement => {
  return (
    <IconButton aria-label="close" sx={styles} {...otherProps}>
      <CloseIcon />
    </IconButton>
  );
};
