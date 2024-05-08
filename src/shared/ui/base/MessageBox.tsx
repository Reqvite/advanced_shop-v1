import {CardMedia, Stack, StackProps, Typography} from '@mui/material';
import {ReactElement} from 'react';
import EmptyImg from '../../../../public/empty.png';
type Props = StackProps & {
  title?: string;
};

export const MessageBox = ({title = 'Not found', ...otherProps}: Props): ReactElement => {
  return (
    <Stack gap={2} height="100%" justifyContent="center" alignItems="center" {...otherProps}>
      <CardMedia component="img" image={EmptyImg} alt="Not found" sx={{width: 200, height: 200}} />
      <Typography variant="h5">{title}</Typography>
    </Stack>
  );
};
