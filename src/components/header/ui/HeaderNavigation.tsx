import {Drawer, Link, Stack, Typography, useMediaQuery, useTheme} from '@mui/material';
import {ReactElement, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {MenuButton} from '@/shared/ui';
import {navigationOptions} from '../model/navigationOptions';
import {headerStyles} from '../styles/styles';

export const HeaderNavigation = (): ReactElement => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const handleDrawerOpen = (): void => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = (): void => {
    setIsDrawerOpen(false);
  };

  return (
    <Stack sx={headerStyles.navContainerStyles}>
      {isMobile ? (
        <>
          <MenuButton onClick={handleDrawerOpen} />
          <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
            <Stack sx={headerStyles.navDrawerContainer}>
              <Typography variant="body1" color="primary">
                Chat with us
              </Typography>
              <Link href="tel:+420336775664" color="text.primary">
                +420 336 775 664
              </Link>
              <Link href="mailto:info@freshnesecom.com" color="text.primary">
                info@freshnesecom.com
              </Link>
              {navigationOptions.map(({label, link}) => (
                <Link
                  key={label}
                  component={NavLink}
                  to={link}
                  color="primary"
                  onClick={handleDrawerClose}
                >
                  {label}
                </Link>
              ))}
            </Stack>
          </Drawer>
        </>
      ) : (
        <>
          <Stack sx={headerStyles.navStackStyles}>
            <Typography variant="body1" color="primary">
              Chat with us
            </Typography>
            <Link href="tel:+420336775664" color="text.primary">
              +420 336 775 664
            </Link>
            <Link href="mailto:info@freshnesecom.com" color="text.primary">
              info@freshnesecom.com
            </Link>
          </Stack>
          <Stack sx={headerStyles.navStackStyles}>
            {navigationOptions.map(({label, link}) => (
              <Link key={label} component={NavLink} to={link} color="primary">
                {label}
              </Link>
            ))}
          </Stack>
        </>
      )}
    </Stack>
  );
};
