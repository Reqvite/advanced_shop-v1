import {Box} from '@mui/material';
import {useEffect} from 'react';
import {AppRouter} from '@/app/providers/AppRouter/AppRouter';
import {Footer} from '@/components/footer';
import {Header} from '@/components/header';
import {useAppDispatch, useAuth} from '@/shared/lib/hooks';
import {AuthModal, Container} from '@/shared/ui';
import {actions as userActions} from '@/slices/user';

function App() {
  const dispatch = useAppDispatch();
  const {accessToken} = useAuth();

  useEffect(() => {
    if (accessToken) {
      dispatch(userActions.currentUser());
    }
  }, []);

  return (
    <Box style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Header />
      <Container component="main" sx={{flex: '1 0 auto', paddingY: 3}}>
        <AppRouter />
      </Container>
      <Footer />
      <AuthModal />
    </Box>
  );
}

export default App;
