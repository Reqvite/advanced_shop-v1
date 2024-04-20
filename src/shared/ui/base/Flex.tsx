import {Stack, StackProps} from '@mui/material';
import {ReactElement, ReactNode} from 'react';

type Props = StackProps & {
  children?: ReactNode;
};

export const Flex = ({children, ...otherProps}: Props): ReactElement => {
  return (
    <Stack display="flex" flexDirection="row" {...otherProps}>
      {children}
    </Stack>
  );
};
