import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {ButtonProps, LinkProps} from '@mui/material';
import {ReactElement} from 'react';
import {Link} from 'react-router-dom';
import {Button} from './Button/Button';

type Props = LinkProps &
  ButtonProps & {
    to: string;
    label?: string;
    withIcon?: boolean;
  };

export const NavigateButton = ({
  label = 'Product details',
  withIcon = true,
  ...otherProps
}: Props): ReactElement => {
  return (
    <Button
      variant="contained"
      component={Link}
      RightAddon={withIcon ? NavigateNextIcon : undefined}
      sx={{minWidth: 166}}
      {...otherProps}
    >
      {label}
    </Button>
  );
};
