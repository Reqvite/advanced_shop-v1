import {useEffect} from 'react';
import {AppRouter} from '@/app/providers/AppRouter/AppRouter';
import {Header} from '@/components/header';
import {useAppDispatch, useAuth} from '@/shared/lib/hooks';
import {AuthModal} from '@/shared/ui';
import {actions as userActions} from '@/slices/user';

function App() {
  const dispatch = useAppDispatch();
  const {accessToken} = useAuth();

  useEffect(() => {
    if (accessToken) {
      dispatch(userActions.currentUser());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <AppRouter />
      <AuthModal />
    </>
  );
}

export default App;
