import {Chip as MuiChip, ChipProps} from '@mui/material';
import {ReactElement} from 'react';

type Props = ChipProps;

export const Chip = (props: Props): ReactElement => {
  return <MuiChip color="primary" {...props} />;
};
