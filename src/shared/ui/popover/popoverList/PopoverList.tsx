import {Box} from '@mui/material';
import {ReactElement} from 'react';
import {PopoverItemI} from '@/shared/types/popover';
import {PopoverListItem} from './PopoverListItem';

type Props = {
  items: PopoverItemI[];
};

export const PopoverList = ({items}: Props): ReactElement => {
  return (
    <Box style={{display: 'flex', gap: '16px'}}>
      {items?.map((item) => <PopoverListItem key={item._id} {...item} />)}
    </Box>
  );
};
