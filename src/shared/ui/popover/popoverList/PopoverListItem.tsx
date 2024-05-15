import {ArrowDropDown} from '@mui/icons-material';
import {Typography, useTheme} from '@mui/material';
import {MouseEvent, ReactElement, useState} from 'react';
import {PopoverItemI} from '@/shared/types/popover';
import {Button} from '../../button/Button';
import {PopoverMenu} from '../popoverMenu/PopoverMenu';
import {SubNavItem} from './PopoverSubNavItem';

type Props = PopoverItemI;

export const PopoverListItem = ({label, children}: Props): ReactElement => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const onClick = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        variant="text"
        sx={{color: theme.palette.text.primary}}
        iconColor={theme.palette.primary.light}
        aria-haspopup="true"
        onClick={onClick}
        RightAddon={ArrowDropDown}
      >
        <Typography fontWeight="bold">{label}</Typography>
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
