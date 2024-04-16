import {Stack, Typography} from '@mui/material';
import {ReactElement} from 'react';

type Props = {
  heading: string;
};

export const FormHeader = ({heading}: Props): ReactElement => {
  return (
    <Stack>
      <Typography component="h2">{heading}</Typography>
    </Stack>
  );
};
