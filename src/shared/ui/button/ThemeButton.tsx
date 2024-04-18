import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import {IconButton, IconButtonProps} from '@mui/material';
import {ReactElement} from 'react';
import {useAppDispatch, useAppSelector} from '@/shared/lib/hooks';
import {actions, selectTheme} from '@/slices/theme';

type Props = IconButtonProps;

export const ThemeButton = (props: Props): ReactElement => {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector(selectTheme);

  const onChangeTheme = (): void => {
    dispatch(actions.toggleTheme());
  };

  return (
    <IconButton color="primary" aria-label="Theme toggle button" onClick={onChangeTheme} {...props}>
      {darkMode ? (
        <WbSunnyRoundedIcon fontSize="small" />
      ) : (
        <ModeNightRoundedIcon fontSize="small" />
      )}
    </IconButton>
  );
};
