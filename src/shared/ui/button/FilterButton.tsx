import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {IconButton, IconButtonProps} from '@mui/material';
import {ReactElement} from 'react';

type Props = IconButtonProps;

export const FilterButton = (props: Props): ReactElement => {
  return (
    <IconButton
      aria-label="Filters"
      {...props}
      sx={(theme) => ({
        background: theme.palette.primary.dark
      })}
    >
      <FilterAltIcon fontSize="inherit" />
    </IconButton>
  );
};
