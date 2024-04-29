import MenuIcon from '@mui/icons-material/Menu';
import {IconButton, IconButtonProps} from '@mui/material';
import {ReactElement} from 'react';

type Props = IconButtonProps;

export const MobileMenuButton = (props: Props): ReactElement => {
  return (
    <IconButton aria-label="open drawer" edge="start" sx={{display: {md: 'none'}}} {...props}>
      <MenuIcon fontSize="inherit" />
    </IconButton>
  );
};
