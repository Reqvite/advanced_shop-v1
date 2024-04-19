import {Stack, StackProps} from '@mui/material';
import {ReactNode} from 'react';

type Props = StackProps & {
  children?: ReactNode;
};

export const Flex = ({children, ...otherProps}: Props) => {
  return (
    <Stack display="flex" flexDirection="row" alignItems="center" {...otherProps}>
      {children}
    </Stack>
  );
};
