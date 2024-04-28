import {Box, Drawer as MuiDrawer, DrawerProps} from '@mui/material';
import {PropsWithChildren, ReactElement, useState} from 'react';
import {CloseButton} from '../button/CloseButton';
import {MobileMenuButton} from '../button/MobileMenuButton';

type Props = DrawerProps & PropsWithChildren;

export const Drawer = ({children}: Props): ReactElement => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <MobileMenuButton onClick={toggleDrawer(true)} sx={{position: 'absolute'}} />
      <MuiDrawer open={open} onClose={toggleDrawer(false)}>
        <CloseButton onClick={toggleDrawer(false)} />
        <Box sx={{padding: 3, mt: 4}}>{children}</Box>
      </MuiDrawer>
    </>
  );
};
