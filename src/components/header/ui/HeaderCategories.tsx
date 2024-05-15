import {Box} from '@mui/material';
import {ReactElement} from 'react';
import {headerStyles} from '@/app/theme/styles';
import {PopoverItemI} from '@/shared/types/popover';
import {PopoverList} from '@/shared/ui/popover/popoverList/PopoverList';

const categoriesItems: PopoverItemI[] = [
  {
    _id: '1',
    label: 'Dogs',
    children: [
      {_id: '1', label: 'Web Development'},
      {_id: '2', label: 'Mobile App Development'}
    ]
  },
  {
    _id: '2',
    label: 'Cats',
    children: [
      {_id: '1', label: 'Web Development'},
      {_id: '2', label: 'Mobile App Development'}
    ]
  }
];

export const HeaderCategories = (): ReactElement => {
  return (
    <Box sx={headerStyles.categoriesContainer}>
      <PopoverList items={categoriesItems} />
    </Box>
  );
};
