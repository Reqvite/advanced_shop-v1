import {Chip as MuiChip, ChipProps} from '@mui/material';

type Props = ChipProps;

export const Chip = (props: Props) => {
  return <MuiChip color="primary" {...props} />;
};
