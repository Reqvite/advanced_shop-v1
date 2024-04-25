import {ArrowDropDown} from '@mui/icons-material';
import {Typography} from '@mui/material';
import React, {MouseEvent, ReactElement} from 'react';
import {Button} from '../../button/Button';
import {PopoverMenu} from '../popoverMenu/PopoverMenu';

type Props = {
  _id: string;
  label?: string;
  children: {
    _id: string;
    label?: string;
    href?: string;
  }[];
};

export const PopoverListItem = ({label, children}: Props): ReactElement => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

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

type SubNavItemProps = {
  _id: string;
  label?: string;
  href?: string;
};

const SubNavItem = ({label}: SubNavItemProps): ReactElement => {
  return (
    <>
      <Typography variant="body1" color="primary.text" component="div">
        {label}
      </Typography>
    </>
  );
};
