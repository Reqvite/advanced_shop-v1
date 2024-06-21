import {Box} from '@mui/material';
import {useEffect} from 'react';
import {AppRouter} from '@/app/providers/AppRouter/AppRouter';
import {Footer} from '@/components/footer';
import {Header} from '@/components/header';
import {useAppDispatch, useAuth, useFilter} from '@/shared/lib/hooks';
import {Alert, Container, Modal} from '@/shared/ui';
import {actions as filterActions} from '@/slices/filter';
import {actions as userActions} from '@/slices/user';

const mainContainer = {display: 'flex', flexDirection: 'column', minHeight: '100vh'};

function App() {
  const dispatch = useAppDispatch();
  const {accessToken} = useAuth();
  const {paramsLength} = useFilter();

  useEffect(() => {
    if (!paramsLength) {
      dispatch(filterActions.resetFilter());
    }
  }, [dispatch, paramsLength]);

  useEffect(() => {
    if (accessToken) {
      dispatch(userActions.currentUser());
    }
  }, []);

  return (
    <Box data-testid="app" sx={mainContainer}>
      <Header />
      <Container component="main">
        <AppRouter />
      </Container>
      <Footer />
      <Modal />
      <Alert />
    </Box>
  );
}

export default App;
