import {Breakpoint, useMediaQuery as muiUseMediaQuery, useTheme} from '@mui/material';

export const useMediaQuery = (media: number | Breakpoint): boolean => {
  const theme = useTheme();
  return muiUseMediaQuery(theme.breakpoints.down(media));
};
