import {ArrowDropDown} from '@mui/icons-material';
import {MouseEvent, ReactElement, useState} from 'react';
import {PopoverItemI} from '@/shared/types/popover';
import {Button} from '../../button/Button';
import {PopoverMenu} from '../popoverMenu/PopoverMenu';
import {SubNavItem} from './PopoverSubNavItem';

type Props = PopoverItemI;

export const PopoverListItem = ({label, children}: Props): ReactElement => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const onClick = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button variant="text" sx={{color: 'black'}} aria-haspopup="true" onClick={onClick}>
        {label} <ArrowDropDown />
      </Button>
      {children && (
        <PopoverMenu
          id="nav-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={onClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          items={children}
          renderItem={SubNavItem}
        />
      )}
    </>
  );
};
