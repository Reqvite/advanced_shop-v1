import {Box} from '@mui/material';
import {useEffect} from 'react';
import {AppRouter} from '@/app/providers/AppRouter/AppRouter';
import {Footer} from '@/components/footer';
import {Header} from '@/components/header';
import {useAppDispatch, useAuth} from '@/shared/lib/hooks';
import {Alert, AuthModal, Breadcrumbs, Container} from '@/shared/ui';
import {actions as userActions} from '@/slices/user';

const mainContainer = {display: 'flex', flexDirection: 'column', minHeight: '100vh'};

function App() {
  const dispatch = useAppDispatch();
  const {accessToken} = useAuth();

  useEffect(() => {
    if (accessToken) {
      dispatch(userActions.currentUser());
    }
  }, []);

  return (
    <Box sx={mainContainer}>
      <Header />
      <Container component="main">
        <Breadcrumbs sx={{mb: 2}} />
        <AppRouter />
      </Container>
      <Footer />
      <AuthModal />
      <Alert />
    </Box>
  );
}

export default App;
