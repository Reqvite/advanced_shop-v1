import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {ButtonProps, LinkProps} from '@mui/material';
import {ReactElement} from 'react';
import {Link} from 'react-router-dom';
import {Button} from './Button';

type Props = LinkProps &
  ButtonProps & {
    to: string;
    label?: string;
  };

export const NavigateButton = ({label = 'Product details', ...otherProps}: Props): ReactElement => {
  return (
    <Button
      variant="contained"
      component={Link}
      RightAddon={NavigateNextIcon}
      sx={{minWidth: 150}}
      {...otherProps}
    >
      {label}
    </Button>
  );
};
