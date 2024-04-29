import {Drawer, Link, Stack, Typography} from '@mui/material';
import {ReactElement, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {headerStyles} from '@/app/theme/styles';
import {useMediaQuery} from '@/shared/lib/hooks';
import {Flex, MobileMenuButton} from '@/shared/ui';
import {navigationOptions} from '../model/navigationOptions';

const navLeftElements = (
  <>
    <Typography variant="body1" color="primary" fontWeight={600}>
      Chat with us
    </Typography>
    <Link href="tel:+420336775664" color="text.primary">
      +420 336 775 664
    </Link>
    <Link href="mailto:info@freshnesecom.com" color="text.primary">
      info@freshnesecom.com
    </Link>
  </>
);

export const HeaderNavigation = (): ReactElement => {
  const isMobile = useMediaQuery('md');
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
          <MobileMenuButton onClick={handleDrawerOpen} />
          <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
            <Stack sx={headerStyles.navDrawerContainer}>
              {navLeftElements}
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
        <Flex justifyContent="space-between" sx={headerStyles.navMaxWidth}>
          <Stack sx={headerStyles.navStackStyles}>{navLeftElements}</Stack>
          <Stack sx={headerStyles.navStackStyles}>
            {navigationOptions.map(({label, link}) => (
              <Link key={label} component={NavLink} to={link} color="primary">
                {label}
              </Link>
            ))}
          </Stack>
        </Flex>
      )}
    </Stack>
  );
};
