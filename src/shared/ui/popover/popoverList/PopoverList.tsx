import {Box} from '@mui/material';
import {ReactElement} from 'react';
import {PopoverListItem} from './PopoverListItem';

type Props = {
  links: {
    _id: string;
    label?: string;
    children: {
      _id: string;
      label?: string;
      href?: string;
    }[];
  }[];
};

export const PopoverList = ({links}: Props): ReactElement => {
  return (
    <Box style={{display: 'flex', gap: '16px'}}>
      {links?.map((navItem) => <PopoverListItem key={navItem._id} {...navItem} />)}
    </Box>
  );
};
