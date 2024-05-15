import {Box} from '@mui/material';
import {useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';
import {AppRouter} from '@/app/providers/AppRouter/AppRouter';
import {Footer} from '@/components/footer';
import {Header} from '@/components/header';
import {useAppDispatch, useAuth} from '@/shared/lib/hooks';
import {Alert, Breadcrumbs, Container, Modal} from '@/shared/ui';
import {actions as filterActions} from '@/slices/filter';
import {actions as userActions} from '@/slices/user';

const mainContainer = {display: 'flex', flexDirection: 'column', minHeight: '100vh'};

function App() {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const {accessToken} = useAuth();

  useEffect(() => {
    if (accessToken) {
      dispatch(userActions.currentUser());
    }
  }, []);

  useEffect(() => {
    if (searchParams.size === 0) {
      dispatch(filterActions.resetFilter());
    }
  }, [dispatch, searchParams]);

  return (
    <Box sx={mainContainer}>
      <Header />
      <Container component="main">
        <Breadcrumbs sx={{mb: 2}} />
        <AppRouter />
      </Container>
      <Footer />
      <Modal />
      <Alert />
    </Box>
  );
}

export default App;
