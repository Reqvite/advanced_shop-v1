import {createTheme, CssBaseline, ThemeProvider as MuiThemeProvider} from '@mui/material';
import {ReactElement, ReactNode} from 'react';
import {getTheme} from '@/app/theme/theme';
import {useAppSelector} from '@/shared/lib/hooks';
import {selectTheme} from '@/slices/theme';

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({children}: Props): ReactElement => {
  const darkMode = useAppSelector(selectTheme);

  const theme = createTheme(getTheme(darkMode ? 'dark' : 'light'));

  return (
    <MuiThemeProvider theme={theme}>
      <>
        <CssBaseline />
        {children}
      </>
    </MuiThemeProvider>
  );
};
