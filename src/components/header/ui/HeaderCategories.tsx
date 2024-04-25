import {Box} from '@mui/material';
import {ReactElement} from 'react';
import {PopoverList} from '@/shared/ui/popover/popoverList/PopoverList';
import {headerStyles} from '../styles/styles';

const navLinks: any = [
  {
    _id: '1',
    label: 'Home'
  },
  {
    _id: '2',
    label: 'Services',
    children: [
      {_id: '1', label: 'Web Development', href: '/web-development'},
      {_id: '2', label: 'Mobile App Development', href: '/mobile-app-development'}
    ]
  },
  {
    _id: '3',
    label: 'About'
  },
  {
    _id: '4',
    label: 'Contact',
    children: [
      {_id: '1', label: 'Email Us', href: 'mailto:info@example.com'},
      {_id: '2', label: 'Call Us', href: 'tel:+1234567890'}
    ]
  }
];

export const HeaderCategories = (): ReactElement => {
  return (
    <Box sx={headerStyles.categoriesContainer}>
      <PopoverList links={navLinks} />
    </Box>
  );
};
