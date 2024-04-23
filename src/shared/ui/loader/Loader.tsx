import {CircularProgress, CircularProgressProps} from '@mui/material';
import {Flex} from '../base/Flex';

type Props = CircularProgressProps & {
  fullHeight?: boolean;
};

export const Loader = ({size = 24, color = 'inherit', fullHeight, ...otherProps}: Props) => {
  return (
    <Flex
      sx={{justifyContent: 'center', alignItems: 'center'}}
      height={fullHeight ? '100vh' : 'auto'}
    >
      <CircularProgress size={size} color={color} {...otherProps} />
    </Flex>
  );
};
