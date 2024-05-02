import {Box, Drawer as MuiDrawer, DrawerProps, Typography} from '@mui/material';
import {ElementType, PropsWithChildren, ReactElement, useState} from 'react';
import {CloseButton} from '../button/CloseButton';
import {MobileMenuButton} from '../button/MobileMenuButton';

type Props = DrawerProps &
  PropsWithChildren & {
    title?: string;
    buttonComponent?: ElementType;
  };

export const Drawer = ({
  children,
  title,
  buttonComponent: Button = MobileMenuButton
}: Props): ReactElement => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = (newOpen: boolean) => (): void => {
    setOpen(newOpen);
  };

  return (
    <>
      <Button onClick={toggleDrawer(true)} sx={{position: 'absolute'}} />
      <MuiDrawer open={open} onClose={toggleDrawer(false)}>
        <CloseButton onClick={toggleDrawer(false)} />
        <Box sx={{padding: 3, mt: 4}}>
          {title && (
            <Typography mb={2} variant="h5">
              {title}
            </Typography>
          )}
          {children}
        </Box>
      </MuiDrawer>
    </>
  );
};
