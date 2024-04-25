import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import {Box, IconButton, IconButtonProps, Menu, MenuItem} from '@mui/material';
import {MouseEvent, ReactElement, useState} from 'react';
import {useAppDispatch, useAuth} from '@/shared/lib/hooks';
import {actions as userActions} from '@/slices/user';

type Props = IconButtonProps;

export const AuthMenuButton = (props: Props): ReactElement => {
  const dispatch = useAppDispatch();
  const {user} = useAuth();

  const onAuthButtonClick = (): void => {
    dispatch(userActions.openModal());
  };

  return user ? (
    <UserMenu />
  ) : (
    <IconButton aria-label="Auth" onClick={onAuthButtonClick} {...props}>
      <LoginIcon fontSize="inherit" />
    </IconButton>
  );
};

function UserMenu(): ReactElement {
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const onOpenMenu = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const onCloseMenu = (): void => {
    setAnchorEl(null);
  };

  const onLogout = (): void => {
    dispatch(userActions.logout());
  };

  return (
    <Box>
      <IconButton aria-label="User menu" aria-haspopup="true" onClick={onOpenMenu}>
        <AccountCircleIcon fontSize="inherit" />
      </IconButton>
      <Menu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        onClose={onCloseMenu}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem onClick={onLogout}>Logout</MenuItem>
      </Menu>
    </Box>
  );
}
