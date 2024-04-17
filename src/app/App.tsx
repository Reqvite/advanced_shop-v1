import {AppRouter} from '@/app/providers/AppRouter/AppRouter';
import {Header} from '@/components/header';
import {AuthModal} from '@/shared/ui';

function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <AuthModal />
    </>
  );
}

export default App;
