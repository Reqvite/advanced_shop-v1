import {Drawer, Link, Stack, Typography, useMediaQuery, useTheme} from '@mui/material';
import {ReactElement, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {MenuButton} from '@/shared/ui';
import {navigationOptions} from '../model/navigationOptions';

export const Navigation = (): ReactElement => {
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
    <Stack
      sx={(theme) => ({
        [theme.breakpoints.down('md')]: {
          alignItems: 'flex-start',
          flexDirection: 'column'
        },
        p: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
      })}
    >
      {isMobile ? (
        <>
          <MenuButton onClick={handleDrawerOpen} />
          <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
            <Stack sx={{gap: 2, p: 2}}>
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
          <Stack
            sx={(theme) => ({
              [theme.breakpoints.down('md')]: {
                flexDirection: 'column'
              },
              flexDirection: 'row',
              gap: 2
            })}
          >
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
          <Stack
            sx={(theme) => ({
              [theme.breakpoints.down('md')]: {
                flexDirection: 'column'
              },
              flexDirection: 'row',
              gap: 2
            })}
          >
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
