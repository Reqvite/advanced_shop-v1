import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import {IconButton} from '@mui/material';
import {ReactElement} from 'react';
import {useAppDispatch, useAppSelector} from '@/shared/lib/hooks';
import {actions, selectTheme} from '@/slices/theme';

export const ThemeButton = (): ReactElement => {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector(selectTheme);

  const onChangeTheme = () => {
    dispatch(actions.toggleTheme());
  };

  return (
    <IconButton color="primary" aria-label="Theme toggle button" onClick={onChangeTheme}>
      {darkMode ? (
        <WbSunnyRoundedIcon fontSize="small" />
      ) : (
        <ModeNightRoundedIcon fontSize="small" />
      )}
    </IconButton>
  );
};
