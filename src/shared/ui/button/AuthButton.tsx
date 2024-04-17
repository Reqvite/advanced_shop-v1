import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {IconButton} from '@mui/material';
import {ReactElement} from 'react';
import {useAppDispatch} from '@/shared/lib/hooks';
import {actions} from '@/slices/user';

export const AuthButton = (): ReactElement => {
  const dispatch = useAppDispatch();

  const onAuthButtonClick = (): void => {
    dispatch(actions.openModal());
  };

  return (
    <IconButton aria-label="Auth" onClick={onAuthButtonClick}>
      <AccountCircleIcon fontSize="inherit" />
    </IconButton>
  );
};
