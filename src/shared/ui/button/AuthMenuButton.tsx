import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import {Box, IconButton, IconButtonProps} from '@mui/material';
import {MouseEvent, ReactElement, useState} from 'react';
import {useAppDispatch, useAuth} from '@/shared/lib/hooks';
import {PopoverItemI} from '@/shared/types/popover';
import {actions as modalActions} from '@/slices/modal';
import {actions as userActions} from '@/slices/user';
import {AuthForm} from '../forms/AuthForm';
import {SubNavItem} from '../popover/popoverList/PopoverSubNavItem';
import {PopoverMenu} from '../popover/popoverMenu/PopoverMenu';

type Props = IconButtonProps;

export const AuthMenuButton = (props: Props): ReactElement => {
  const dispatch = useAppDispatch();
  const {user} = useAuth();

  const onAuthButtonClick = (): void => {
    dispatch(modalActions.openModal(<AuthForm />));
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

  const menuItems: PopoverItemI['children'] = [
    {
      _id: '1',
      label: 'Profile'
    },
    {
      _id: '2',
      label: 'Logout',
      onClick: onLogout
    }
  ];

  return (
    <Box>
      <IconButton aria-label="User menu" aria-haspopup="true" onClick={onOpenMenu}>
        <AccountCircleIcon fontSize="inherit" />
      </IconButton>
      <PopoverMenu
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
        items={menuItems}
        renderItem={SubNavItem}
      />
    </Box>
  );
}
